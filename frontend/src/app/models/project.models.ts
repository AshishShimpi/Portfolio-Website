export interface Project {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    front: string
    back: string
    other: string
    image: Image
    name: string
    about: string
    projectUrl: string
    hostUrl: string
  }
  
  export interface Image {
    _type: string
    asset: {}
  }