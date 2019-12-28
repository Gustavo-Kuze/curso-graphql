const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
    scalar Date

    # retornar Date só é possível por conta da declaração scalar
    type Query {
        ola: String
        horaAtual: Date
    }
`;

const resolvers = {
    Query: {
        ola(){
            return 'E aí!'
        },
        horaAtual(){
            return new Date
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
