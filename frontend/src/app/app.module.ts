import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogComponent } from './blog/blog.component';
import { BlogsListingComponent } from './blogs-listing/blogs-listing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        BlogComponent,
        BlogsListingComponent,
        InfoDialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
