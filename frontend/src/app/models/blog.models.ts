export interface Blog {
    _id: string;
    _type: string;
    titles: string;
    meta: string;
    content: any[];
    poster: object;
    createdAt: string;
    author: object;
  }