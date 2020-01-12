import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent
},{
  path:'contact',
  component:ContactComponent
},{
  path:'settings',
  component:SettingsComponent
},{
  path:'account',
  component:AccountComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullPagesRoutingModule { }
