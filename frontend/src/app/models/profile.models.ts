export interface Profile {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    contact: number
    email: string
    name: string
    about: any[];
    pic: Pic
    resume: Resume
    _updatedAt: string
  }
  
  export interface Pic {}
  
  export interface Resume {
    asset: Asset2
  }
  
  export interface Asset2 {
    url: string
  }
  