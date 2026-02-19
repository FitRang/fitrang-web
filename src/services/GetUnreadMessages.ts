import { gqlRequest } from "./gqlRequest"
import type { GetUnreadMessagesResponse } from "./models"

const GET_UNREAD_MESSAGES_QUERY = `
  query {
	getUnreadMessages {
  	id
    sender
    receiver
    message
    isRead
    createdAt
  }
}
`
export default async function getUnreadMessages(): Promise<GetUnreadMessagesResponse> {
  return gqlRequest<GetUnreadMessagesResponse>(
    GET_UNREAD_MESSAGES_QUERY,
  )
}
