const { ApolloServer, gql } = require("apollo-server");

const usuariosArray = [
  {
    id: 1,
    nome: "Fulano dos Santos",
    idade: 32,
    email: "aksjdh@aksjdh.com"
  },
  {
    id: 2,
    nome: "Ciclano Gomes",
    idade: 33,
    email: "gomes.ciclano@cicla.com"
  },
  {
    id: 3,
    nome: "Bora Man",
    idade: 13,
    email: "bora.man@mail.com"
  }
];

const typeDefs = gql`
  scalar Date

  type Usuario {
    id: ID
    nome: String
    email: String
    idade: Int
    salario: Float
    vip: Boolean
  }

  type Produto {
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: Float
  }

  # retornar Date só é possível por conta da declaração scalar
  type Query {
    ola: String
    horaAtual: Date
    usuarioLogado: Usuario
    produtoEmDestaque: Produto
    usuarios: [Usuario!]!
  }
`;

const resolvers = {
  Usuario: {
    salario(usuario) {
      return usuario.salario_real;
    }
  },
  Produto: {
    precoComDesconto(produto) {
      return produto.desconto
        ? produto.preco * (1 - produto.desconto)
        : produto.preco;
    }
  },
  Query: {
    ola() {
      return "E aí!";
    },
    horaAtual() {
      return new Date();
    },
    usuarioLogado() {
      return {
        id: 1,
        nome: "Fulano da Silva",
        email: "ful.silvvva@mail.com",
        idade: 23,
        salario_real: 3233.23,
        vip: true
      };
    },
    produtoEmDestaque() {
      return {
        nome: "TV LG 32 polegadas",
        preco: 1502.23,
        desconto: 0.32
      };
    },
    usuarios() {
      return usuariosArray;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Servidor sendo executado em: ${url}`);
});

/**
 *
 * Os tipos aceitos por padrão pelo GraphQL são:
 * String
 * Int
 * Float
 * Boolean
 * e ID
 * ....
 * Ainda assim é possível declarar um tipo "customizado" para retornar uma classe
 * utilizando o "type", ou para classes prontas da linguagem, como é o caso do Date, usamos o scalar
 */
