const { ApolloServer, gql } = require("apollo-server");

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

    # retornar Date só é possível por conta da declaração scalar
    type Query {
        ola: String
        horaAtual: Date
        usuarioLogado: Usuario
    }
`;

const resolvers = {
    Usuario: {
        salario(usuario){
            return usuario.salario_real
        }
    },
    Query: {
        ola(){
            return 'E aí!'
        },
        horaAtual(){
            return new Date
        },
        usuarioLogado(){
            return {
                id: 1,
                nome: 'Fulano da Silva',
                email: 'ful.silvvva@mail.com',
                idade: 23,
                salario_real: 3233.23,
                vip: true
            }
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
