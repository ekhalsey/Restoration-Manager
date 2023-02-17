import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }