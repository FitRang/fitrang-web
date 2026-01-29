import graphqlClient from "./graphqlClient"
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
  return graphqlClient.request<GetUnreadMessagesResponse>(
    GET_UNREAD_MESSAGES_QUERY,
  )
}
