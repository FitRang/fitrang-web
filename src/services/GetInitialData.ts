import graphqlClient from "./graphqlClient";
import type { GetMyInitialDataResponse } from "./models"

const GET_MY_INITIAL_DATA = `
  query GetMyInitialData {
    getMyProfile {
      id
      fullName
      email
      username
      profileUrl
      createdAt
      updatedAt
    }
    getMyDossier {
      id
      email
      username
      faceType
      skinTone
      bodyType
      gender
      preferredColors
      dislikedColors
      viewers
      height
      weight
      createdAt
      updatedAt
    }
    getUnreadMessages {
  	  id
      sender
      receiver
      message
      isRead
      createdAt
    }
  }
`;

export async function getMyInitialData(): Promise<GetMyInitialDataResponse> {
  return graphqlClient.request<GetMyInitialDataResponse>(
    GET_MY_INITIAL_DATA
  );
}
