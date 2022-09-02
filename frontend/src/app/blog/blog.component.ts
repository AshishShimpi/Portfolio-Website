import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Route } from '@angular/router';
import { SanityService } from '../../services/sanity.service';
import { Blog } from '../models/blog.models';
import { toHTML } from '@portabletext/to-html';
import { asapScheduler, Observable, scheduled } from 'rxjs';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private sanityService: SanityService,
    ) { }

    blogs: Blog[] = [];
    content: string;
    id: string;

    ngOnInit(): void {
        console.log(`blog works`);
        this.route.queryParams.subscribe(params => {
            this.id = params['id'];
            console.log('id from url is ', this.id);
        });
        this.getBlog();
    }

    getImage(source: any) {
        return this.sanityService.urlFor(source).width(200).url();
    }

    queryBlogs(): Observable<Blog[]> {
        return scheduled(this.sanityService.sanityClientCredentials.option.fetch(
            `*[_type == "blog"] {
                _id,
                author->{name},
                content,
                createdAt,
                meta,
                poster,
                titles,
                slug }`
        ), asapScheduler);
    }

    getBlog(): void {
        this.queryBlogs().subscribe({
            next: (blogs) => {
                this.blogs = blogs;
                console.log(`blog has been received`, blogs);
            },
            error: (err) => console.error(`query blogs failed`,err)

        })
    }


}
