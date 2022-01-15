export interface CarDTO {
  id: string
  brand: string
  name: string
  about: string
  period: string
  price: number
  fuel_type: string
  thumbnail: string
  created_at: number
  updated_at: number
  accessories: {
    id: string
    type: string
    name: string
    car_id: string
  }[]
  photos: {
    id: string
    car_id: string
    photo: string
  }[]
}