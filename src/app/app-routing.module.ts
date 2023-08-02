import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  
  {path:"",component:UploadComponent},
  {path:"upload",component:UploadComponent},
  {path:"display",component:DisplayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
