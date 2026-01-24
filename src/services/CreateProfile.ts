import axiosInstance from "./axiosInstance";
import type { CreateProfileProps, CreateProfileResponse } from "@/services/models";

export default async function createProfile(
  { fullName, username }: CreateProfileProps
): Promise<CreateProfileResponse> {
  const res = await axiosInstance.post<CreateProfileResponse>(
    "/",
    {
      operationName: "CreateProfile",
      query: `
        mutation CreateProfile($input: CreateProfileInput!) {
          createProfile(input: $input) {
            id
            fullName
            email
            username
            createdAt
          }
        }
      `,
      variables: {
        input: {
          fullName,
          username,
        },
      },
    },
  );

  return res.data;
}
