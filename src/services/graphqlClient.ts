import { GraphQLClient } from "graphql-request";

const graphqlClient = new GraphQLClient("http://127.0.0.1:4000/", {
  headers: {
    "content-type": "application/json",
    "x-user-email": "john2@example.com",
  },
});

export default graphqlClient;
