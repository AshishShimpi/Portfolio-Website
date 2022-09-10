import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SanityService } from '../../services/sanity.service';
import { Blog } from '../models/blog.models';

@Component({
    selector: 'app-blogs-listing',
    templateUrl: './blogs-listing.component.html',
    styleUrls: ['./blogs-listing.component.css']
})
export class BlogsListingComponent implements OnInit {

    constructor(private sanityService: SanityService) { }

    blogs: Blog[] = [];

    ngOnInit(): void {
        this.getBlogs();
    }

    getImage(source: any) {
        return this.sanityService.urlFor(source);
    }
    
    getBlogs(): void {
        this.sanityService.getBlogs()
            .subscribe({
                next: (blogs) => {
                    this.blogs = blogs;
                    // console.log(`All blog has been received`, blogs);
                },
                error: (err) => console.error(`query blogs failed`, err)
            })
    }

}
