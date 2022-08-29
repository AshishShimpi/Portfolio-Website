import { Component, OnInit } from '@angular/core';
import { SanityService } from '../../services/sanity.service';
import { Blog } from '../models/blog.models';
import { toHTML } from '@portabletext/to-html';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    constructor(private sanityService: SanityService) { }
    blogs: Blog[] = []
    content: string;
    ngOnInit(): void {
        // this.getMovies();
    }
    getImage(source:any){
        return this.sanityService.urlFor(source).url();
    }
    // getBLogs(): void {
    //     this.sanityService.getBlogs()
    //         .subscribe({
    //             next: (blogs) => {
    //                 this.blogs = blogs;
    //                 console.log(blogs);
    //                 this.content = toHTML(blogs[0].content,{
    //                     onMissingComponent : false,
    //                     components : {
    //                         types : {
    //                             image : ({value})=> `<img src="${this.sanityService.urlFor(value).width(100).url()}" />`,
    //                         }
    //                     }
    //                 });

    //             },
    //             error: (error) => {
    //                 console.error('fails ', error);
    //             }
    //         })
    // }


}
