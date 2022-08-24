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
    blog: Blog[] = []
    ngOnInit(): void {
        this.getMovies();
    }

    getMovies(){
        this.sanityService.getBlogs()
        .subscribe({
            next:(blogs)=>{
                console.log('bloggsssssssssssss',blogs);
            },
            error: (error) =>{
                console.error('fails ', error);
            }
        })
    }

}
