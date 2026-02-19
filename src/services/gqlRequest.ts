import { createGraphQLClient } from "./graphqlClient";
import { getValidToken } from "./getValidToken.ts";
import { getAuth } from "firebase/auth";

export async function gqlRequest<T>(
  query: string,
  variables?: any
): Promise<T> {
  try {
    const token = await getValidToken();

    const client = createGraphQLClient(token);

    return await client.request<T>(query, variables);
  } catch (err: any) {

    if (
      err.response?.errors?.[0]?.message === "token_expired" ||
      err.response?.status === 401
    ) {

      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) throw err;

      const newToken = await user.getIdToken(true);

      localStorage.setItem("id_token", newToken);

      const client = createGraphQLClient(newToken);

      return await client.request<T>(query, variables);
    }

    throw err;
  }
}
