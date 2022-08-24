import { Injectable } from '@angular/core';
// import { SanityClient } from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";
const sanityClient = require('@sanity/client');
import { asapScheduler, Observable, scheduled } from 'rxjs';
import { Blog } from '../app/models/blog.models';

@Injectable({
    providedIn: 'root'
})
export class SanityService {

    constructor() { }

    sanityClientCredentials = {
        option: sanityClient({
          projectId: "ctnstz34",
          dataset: "production"
        })
      }

    urlFor = (source: any) =>
  imageUrlBuilder(this.sanityClientCredentials.option).image(source);

  getBlogs(): Observable<Blog[]>{
    return scheduled(this.sanityClientCredentials.option.fetch(
        `*[_type == "blog"]`
      ), asapScheduler);
  }

}
