import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatctsListComponent } from './contatcts-list/contatcts-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'contacts',component:ContatctsListComponent},
  {path:'newcontact',component:NewContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
