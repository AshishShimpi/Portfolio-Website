import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ParamMap, ActivatedRoute, Route } from '@angular/router';
import { SanityService } from '../../services/sanity.service';
import { Blog } from '../models/blog.models';
import { toHTML } from '@portabletext/to-html';
@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private sanityService: SanityService,
    ) { }

    blog: Blog;
    content: string;
    id: string;

    ngOnInit(): void {
        
        this.route.queryParams.subscribe(params => {
            this.id = params['id'];
            
        });
        this.getBlog();
        window.scroll(0,0);
    }

    getImage(source: any) {
        return this.sanityService.urlFor(source);
    }

    getBlog(): void {
        this.sanityService.getBlogs(
            `*[_type == 'blog' && _id == '${this.id}' ] {
            _id,
            author->{name,image},
            content,
            createdAt,
            meta,
            poster,
            titles
         }`
        ).subscribe({
            next: (blogs) => {
                this.blog = blogs[0];
                // console.log(`blog has been received`, blogs);
                this.content = toHTML(blogs[0].content, {
                    onMissingComponent: false,
                    components: {
                        types: {
                            image: ({ value }) => 
                            `<div class="imageof"> <img src="${this.getImage(value).width(700).height(300).url()}" /> </div>`,
                        }
                    }
                });
            },
            error: (err) => console.error(`query to blog failed`, err)
        })
    }


}
