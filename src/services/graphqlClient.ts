import { GraphQLClient } from "graphql-request";

export function createGraphQLClient(token?: string) {
  return new GraphQLClient("http://127.0.0.1:8000/graphql", {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "content-type": "application/json",
    },
  });
}
