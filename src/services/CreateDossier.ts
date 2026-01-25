import graphqlClient from "./graphqlClient"
import type {
  CreateDossierProps,
  CreateDossierResponse,
} from "@/services/models"

const CREATE_DOSSIER_MUTATION = `
  mutation CreateDossier($input: DossierCreateInput!) {
    createDossier(input: $input) {
      id
      faceType
      skinTone
      bodyType
      gender
      preferredColors
      dislikedColors
      createdAt
    }
  }
`

export default async function createDossier(
  input: CreateDossierProps
): Promise<CreateDossierResponse> {
  console.log(input)
  return graphqlClient.request<CreateDossierResponse>(
    CREATE_DOSSIER_MUTATION,
    {
      input,
    }
  )
}
