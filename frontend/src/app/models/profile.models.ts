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
    backg: background
    resume: Resume
    _updatedAt: string
  }
  
  export interface Pic {
    asset: Asset2
  }

  export interface background {
    asset: Asset2
  }
  
  export interface Resume {
    asset: Asset2
  }
  
  export interface Asset2 {
    url: string
  }
  