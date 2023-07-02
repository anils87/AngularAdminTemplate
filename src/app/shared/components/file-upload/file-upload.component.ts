import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


export interface FileUploadDataTemplate{
  email:string;
}

const fileSizeInKB: number = 1024;
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  
  @Input() chooseLabel = 'Choose File';
  @Input() uploadLabel = 'Upload';
  @Input() previewLabel = 'Preview';
  @Input() deleteLabel = 'Delete';
  @Output() fileEmitEvent = new EventEmitter<File[]>()
  fileContent:FileUploadDataTemplate[]=[];
  @Output() fileContentEmitEvent = new EventEmitter<any[]>()
  @ViewChild('fileUpload') fileUpload: ElementRef | null = null;
  @Input() accept ='*';
  @Input() validExts= 'csv,xlsx,xls,jpg,jpeg,png';
  @Input() maxFileSizeInMB=5;
  @Input() files:File[] = [];
  @Input() multiple = false;
  invalidFileSizeMessageSummary:string='';
  invalidFileTypeMessageDetail:string='';

  constructor(private sanitizer:DomSanitizer){

  }
  onClick(event:any){
    if(this.fileUpload)
      this.fileUpload.nativeElement.click();
  }
  OnFileSelect(event:any){
    this.invalidFileSizeMessageSummary='';
    this.invalidFileTypeMessageDetail='';
    let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    for(let i=0; i< files.length ; i++){
      let file = files[i];
      let isValidFileSize= this.validateFileSize(file);
      let isValidFileType = this.validateFileType(file);
      if(this.validateFileExist(file) && isValidFileSize && isValidFileType)
      {
        file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
        if(!this.multiple)
          { 
            this.files=[];
          }
          this.files.push(files[i]);          
          this.fileEmitEvent.emit(this.files);
      }
      else{
        if(!isValidFileSize)  {
          this.invalidFileSizeMessageSummary='File Size cannot exceed '+ this.maxFileSizeInMB +' MB';
        }
        if(!isValidFileType){
          this.invalidFileTypeMessageDetail='Please upload supported file type ('+this.validExts+')';
        }
      }
    }
  }
  onRemoveFile(event:any,file:File){
    let ix;
    if(this.files && -1 !== (ix = this.files.indexOf(file))){
      this.files.splice(ix,1);
      this.clearInputElement();
      this.fileEmitEvent.emit(this.files);
    }  
  }
  clearInputElement()
  {
    if(this.fileUpload !=null){
      this.fileUpload.nativeElement.value ='';
    }
  }
  validateFileExist(file:File){
    for(const f of this.files){
      if(f.name === file.name && f.lastModified === file.lastModified
         && f.size === file.size && f.type === file.type){
          return false;
      }
    }
    return true;
  }
  validateFileSize(file:File){
    if(file.size <= (this.maxFileSizeInMB* fileSizeInKB))
      return true;
    else
    return false;
  }
  validateFileType(file:File){
    const validExtensions = this.validExts.split(",").map(m=>m.trim().toLowerCase());
    const fileExt = file.name.split('.').pop();
    if(fileExt !=null && fileExt != undefined && validExtensions.indexOf(fileExt.toLowerCase())!=-1)
      return true;
    else
      return false;
  }

  previewData(){
    if(this.isValidCSVfile(this.files[0]))
    {    
      let reader = new FileReader();
      reader.readAsText(this.files[0]);
      reader.onload = () =>{
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        let headersArray = this.getHeaderArray(csvRecordsArray);
        this.fileContent = this.getDataRecordsArray(csvRecordsArray,headersArray.length);
        this.fileContentEmitEvent.emit(this.fileContent);
      }
      reader.onerror = () =>{
        console.log('Error is occurred while reading file!');
      }
    }
    else{
      console.log('Please upload valid csv file.');
    }
  }
  isValidCSVfile(file:File){
    return file.name.endsWith(".csv");
  }
  getHeaderArray(csvRecordsArray:any){
    let headers = (<string>csvRecordsArray[0]).split(',');
    let headerArray =[];
    for(let i=0; i < headers.length ; i++){
      headerArray.push(headers[i]);
    }
    return headerArray;
  }
  getDataRecordsArray(csvRecordsArray:any,headerLength:any){
    let csvArray=[];
    for(let i=1 ; i< csvRecordsArray.length -1 ; i++){
      let currentRecord = (<string>csvRecordsArray[i]).split(',');
      if(currentRecord.length == headerLength){
        let csvRecord : FileUploadDataTemplate = {} as FileUploadDataTemplate;
        // Email is the property name
        csvRecord.email = currentRecord[0].trim();
        csvArray.push(csvRecord);
      }
    }
    return csvArray;
  }
  fileReset(){
    this.files=[];
  }
}
