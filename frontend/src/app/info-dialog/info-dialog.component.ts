import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SanityService } from 'src/services/sanity.service';
import { Project } from '../models/project.models';


@Component({
    selector: 'app-info-dialog',
    templateUrl: './info-dialog.component.html',
    styleUrls: ['./info-dialog.component.css']
})
export class InfoDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<InfoDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public projectData: Project,
        private sanityService: SanityService,
    ) { }

    ngOnInit(): void {
        console.log('project data',this.projectData,this.projectData.name);

    }
    getImage(){
        return this.sanityService.urlFor(this.projectData.image).width(400).fit('min').url();
    }

}
