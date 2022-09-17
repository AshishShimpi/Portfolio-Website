
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../app/homepage/homepage.component';
import { BlogComponent } from '../app/blog/blog.component';
import { BlogsListingComponent } from './blogs-listing/blogs-listing.component';
 
const routes: Routes = [
    { path : '', component: HomepageComponent },
    { path : 'blogsListing', component: BlogsListingComponent },
    { path : 'blog/:title', component: BlogComponent},
    // { path : '**', component : HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
