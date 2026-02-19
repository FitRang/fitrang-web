import { gqlRequest } from "./gqlRequest"
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
  return gqlRequest<MarkAsReadResponse>(
    MARK_AS_READ_QUERY,
    {
      input: ID,
    }
  )
}
