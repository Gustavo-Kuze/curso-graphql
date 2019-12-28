const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        ola: String
    }
`;

const resolvers = {
    Query: {
        ola(){
            return 'E aí!'
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
