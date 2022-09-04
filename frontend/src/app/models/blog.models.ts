export interface Blog {
    _id: string;
    _type: string;
    titles: string;
    slug: string;
    meta: string;
    content: any[];
    poster: object;
    createdAt: string;
    author: string;
  }