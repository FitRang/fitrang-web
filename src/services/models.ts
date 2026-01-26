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

export type Dossier = {
  faceType?: string
  skinTone?: string
  bodyType?: string
  hairType?: string
  gender?: string
  preferredColors: string[]
  dislikedColors: string[]
  height?: string
  weight?: string
}

export type CreateDossierProps = {
  faceType?: string
  skinTone?: string
  bodyType?: string
  gender?: string
  preferredColors?: string[]
  dislikedColors?: string[]
  height?: string
  weight?: string
}

export type CreateDossierResponse = {
  createDossier: {
    id: string
    faceType: string
    skinTone: string
    bodyType: string
    gender: string
    preferredColors: string[]
    dislikedColors: string[]
    createdAt: string
  }
}
