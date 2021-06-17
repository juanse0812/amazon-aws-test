import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWordComponent } from './hello-word/hello-word.component'

const routes: Routes = [
  {path:'', component: HelloWordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
