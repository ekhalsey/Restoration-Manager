import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { NewClientComponent } from './new-client/new-client.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddItemComponent},
  // TODO: Figure out angular subpaths
  // { path: '/add/client', component: NewClientComponent},
  // { path: '/add/project', component: NewProjectComponent},
  { path: 'project', component: ProjectComponent},
  { path: 'client', component: ClientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
