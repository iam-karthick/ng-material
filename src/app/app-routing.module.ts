import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './pages/nav/nav.component';
// import {ContentPagesModule} from './content-pages/content-pages.module'
import { FullPageComponent } from './pages/full-page/full-page.component';

const routes: Routes = [{
  path:'',
  component:NavComponent,
  loadChildren:'./content-pages/content-pages.module#ContentPagesModule'
},
{
  path:'home',
  component:FullPageComponent,
  loadChildren:'./full-pages/full-pages.module#FullPagesModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
