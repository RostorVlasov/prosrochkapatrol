export interface ComplaintRequest {
    store_address: string
    problem_types: string[]
    problem_date: string
    staff_contacted: string
    description: string
    photos: PhotoType[]
}

interface PhotoType {
    photo: string
}