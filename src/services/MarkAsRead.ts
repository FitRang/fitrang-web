import graphqlClient from "./graphqlClient"
import type { MarkAsReadResponse } from "./models"

const MARK_AS_READ_QUERY = `
  mutation MarkMessageAsRead($input: ID!) {
  markMessageAsRead(messageId: $input) {
    id
    sender
    receiver
    message
    isRead
    createdAt
  }
}
`
export default async function markAsRead(ID: string): Promise<MarkAsReadResponse> {
  return graphqlClient.request<MarkAsReadResponse>(
    MARK_AS_READ_QUERY,
    {
      input: ID,
    }
  )
}
