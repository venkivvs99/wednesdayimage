import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  selectedFile!: File;
  resMessage: any="";
  imageName: any;
  name:string="";
  price:string="";

  constructor(private http:HttpClient){}

  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }


  prdSubmitt(){
    
    const uploadImageData = new FormData();

    uploadImageData.append('dietFile', this.selectedFile, this.selectedFile.name);
    uploadImageData.append("name",this.name);
    uploadImageData.append("price",this.price);
    

    let res =this.http.post("http://localhost:1234/prd/add",uploadImageData,
    { observe: 'response' });
    res.subscribe(
      data=>{
        this.resMessage = data;
      }
    );

  }

}
