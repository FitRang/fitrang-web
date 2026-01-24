export interface MyProfile {
  id: string
  fullName: string
  email: string
  username: string
  createdAt: string
}

export interface CreateProfileProps {
  fullName: string
  username: string
}

export interface GraphQLError {
  message: string
  path?: (string | number)[]
  extensions?: Record<string, any>
}

export interface GraphQLResponse<T> {
  data: T | null
  errors?: GraphQLError[]
}

export interface CreateProfileData {
  createProfile: MyProfile
}

export type CreateProfileResponse = GraphQLResponse<CreateProfileData>
