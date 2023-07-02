import { Component } from '@angular/core';

@Component({
  selector: 'app-responsive-layout',
  templateUrl: './responsive-layout.component.html',
  styleUrls: ['./responsive-layout.component.scss']
})
export class ResponsiveLayoutComponent {
  validExts="csv";
  fileSizeInMB=5;
  previewedData:any[]=[];
  files:File[]=[];
  constructor(){}

  setFiles(event:any){
    this.files=event;
    console.log('Files');
    console.log(this.files);
  }
  setPreviewedData(event:any){
    this.previewedData = event;
    console.log('Previewed Data');
    console.log(this.previewedData);
  }
}
