import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Route } from '@angular/router';
import { SanityService } from '../../services/sanity.service';
import { Blog } from '../models/blog.models';
import { toHTML } from '@portabletext/to-html';
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
        return this.sanityService.urlFor(source);
    }

    getBlog(): void {
        this.sanityService.getBlogs(
            `*[_type == 'blog' && _id == '${this.id}' ] {
            _id,
            author->{name},
            content,
            createdAt,
            meta,
            poster,
            titles,
            slug }`
        ).subscribe({
            next: (blogs) => {
                this.blogs = blogs;
                console.log(`blog has been received`, blogs);
                this.content = toHTML(blogs[0].content, {
                    onMissingComponent: false,
                    components: {
                        types: {
                            image: ({ value }) => `<img src="${this.getImage(value).width(100).url()}" />`,
                        }
                    }
                });
            },
            error: (err) => console.error(`query blogs failed`, err)

        })
    }


}
