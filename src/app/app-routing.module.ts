import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhetherComponent } from './whether/whether.component';

const routes: Routes = [
  {path:'', component:WhetherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
