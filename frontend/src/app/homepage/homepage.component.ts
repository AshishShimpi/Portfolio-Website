import { Component, OnInit } from '@angular/core';
import { SanityService } from '../../services/sanity.service';
import { Blog } from '../models/blog.models';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    constructor(private sanityService: SanityService) { }

    private homeBlogQuery = `*[_type == "blog"] {
        _id,
        author->{name},
        createdAt,
        meta,
        poster,
        titles,
        slug }[0...3]`

    blogs: Blog[] = [];

    ngOnInit(): void {
        this.getBlogs();
    }

    getImage(source: any) {
        return this.sanityService.urlFor(source);
    }

    getBlogs(): void {
        this.sanityService.getBlogs(this.homeBlogQuery)
            .subscribe({
                next: (blogs) => {
                    this.blogs = blogs;
                    console.log(blogs);
                },
                error: (error) => {
                    console.error('failed to fetch blogs\n', error);
                }
            })
    }


}
