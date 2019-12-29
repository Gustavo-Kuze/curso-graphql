const { ApolloServer } = require("apollo-server");
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')

const schemaPath = './schema/index.graphql'

const server = new ApolloServer({
  typeDefs: importSchema(schemaPath),
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
