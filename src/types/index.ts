export interface Training {
  id: string
  title: string
  description: string
  duration: string
  level: string
  image: string
  tags: string[]
}

export interface Certification {
  id: string
  title: string
  issuer: string
  description: string
  dateIssued: string
  expiryDate?: string
  category: string
  image: string
  credentialId?: string
}

export interface Category {
  id: string
  name: string
  count: number
}
