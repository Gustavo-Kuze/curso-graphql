const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        ola: String
        horaAtual: String
    }
`;

const resolvers = {
    Query: {
        ola(){
            return 'E aí!'
        },
        horaAtual(){
            return `A hora atual é: ${new Date()}`
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
