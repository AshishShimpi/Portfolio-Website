import { Injectable } from '@angular/core';
// import { SanityClient } from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";
const sanityClient = require('@sanity/client');
import { asapScheduler, Observable, scheduled } from 'rxjs';
import { Profile } from 'src/app/models/profile.models';
import { Project } from 'src/app/models/project.models';
import { Blog } from '../app/models/blog.models';

@Injectable({
    providedIn: 'root'
})
export class SanityService {

    constructor() { }
    private defaultBlogQuery: string = `*[_type == "blog"] {
        _id,
        author->{name},
        createdAt,
        meta,
        poster,
        "original_url":poster{asset->{url}},
        titles,
        slug }`;
    private defaultPeojectQuery: string = `*[_type == "projects"]`;

    sanityClientCredentials = {
        option: sanityClient({
            projectId: "ctnstz34",
            dataset: "production",
            apiVersion: '2022-08-12',
            useCdn: false
        })
    }

    urlFor = (source: any) =>
        imageUrlBuilder(this.sanityClientCredentials.option).image(source);

    getBlogs(query: string = this.defaultBlogQuery): Observable<Blog[]> {
        return scheduled(this.sanityClientCredentials.option.fetch(
            query
        ), asapScheduler);
    }

    getProfle(query: string): Observable<Profile> {
        return scheduled(this.sanityClientCredentials.option.fetch(
            query
        ), asapScheduler);
    }

    getProjects(query: string = this.defaultPeojectQuery ): Observable<Project[]> {
        return scheduled(this.sanityClientCredentials.option.fetch(
            query
        ), asapScheduler);
    }


}
