import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogImageViewComponent } from './dog-image-view/dog-image-view.component';

const routes: Routes = [
  {path:'', component:DogImageViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
