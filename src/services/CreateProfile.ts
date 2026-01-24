import graphqlClient from "./graphqlClient";
import type {
  CreateProfileProps,
  CreateProfileResponse,
} from "@/services/models";

const CREATE_PROFILE_MUTATION = `
  mutation CreateProfile($input: ProfileCreateInput!) {
    createProfile(input: $input) {
      id
      fullName
      email
      username
      createdAt
    }
  }
`;

export default async function createProfile(
  { fullName, username }: CreateProfileProps
): Promise<CreateProfileResponse> {
  return graphqlClient.request<CreateProfileResponse>(
    CREATE_PROFILE_MUTATION,
    {
      input: {
        fullName,
        username,
      },
    }
  );
}
