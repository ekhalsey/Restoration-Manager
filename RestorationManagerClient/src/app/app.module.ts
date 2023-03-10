import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarButtonComponent } from './nav-bar-button/nav-bar-button.component';
import { HeaderComponent } from './header/header.component';
import { PageTemplateComponent } from './page-template/page-template.component';
import { FooterComponent } from './footer/footer.component';
import { AddItemComponent } from './add-item/add-item.component';
import { NewClientComponent } from './new-client/new-client.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectComponent } from './project/project.component';
import { ClientComponent } from './client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectListComponent } from './project-list/project-list.component';
import { NewProjectFormComponent } from './new-project/new-project-form/new-project-form.component';
import { ExistingClientFormComponent } from './existing-client-form/existing-client-form.component';
import { NewClientFormComponent } from './new-client/new-client-form/new-client-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    NavBarButtonComponent,
    HeaderComponent,
    PageTemplateComponent,
    FooterComponent,
    AddItemComponent,
    NewClientComponent,
    NewProjectComponent,
    ProjectComponent,
    ClientComponent,
    ProjectListComponent,
    NewProjectFormComponent,
    ExistingClientFormComponent,
    NewClientFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
