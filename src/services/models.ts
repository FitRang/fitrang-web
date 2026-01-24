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

export interface CreateProfileData {
  createProfile: MyProfile
}

export interface CreateProfileResponse {
  createProfile: MyProfile
}
