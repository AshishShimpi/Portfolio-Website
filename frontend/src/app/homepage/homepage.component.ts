import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SanityService } from '../../services/sanity.service';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { Blog } from '../models/blog.models';
import { Profile } from '../models/profile.models';
@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    constructor(
        private sanityService: SanityService,
        public dialog: MatDialog
    ) { }

    private homeBlogQuery = `*[_type == "blog"] {
        _id,
        author->{name},
        createdAt,
        meta,
        poster,
        "original_url":poster{asset->{url}},
        titles,
        slug }[0...3]`;

    private profileQuery = `*[_type == "profile"] {
        _id,
        name,
        pic,
        email,
        resume{asset->{url}},
        contact }[0]`

    blogs: Blog[] = [];
    profile: Profile;

    ngOnInit(): void {
        this.getProfile();
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
                    // console.log(blogs);
                },
                error: (error) => {
                    console.error('failed to fetch blogs\n', error);
                }
            })
    }

    getProfile(): void {
        this.sanityService.getProfle(this.profileQuery)
            .subscribe({
                next: (profile) => {
                    this.profile = profile;
                    console.log(`profile received is`, profile);
                },
                error: (error) => {
                    console.error('failed to fetch Profile\n', error);
                }
            })
    }

    openDialog(): void {
        this.dialog.open(InfoDialogComponent,{
            width: '700px',
            height: '500px',
            data:{name:'ashish'},
        })
    }

}
