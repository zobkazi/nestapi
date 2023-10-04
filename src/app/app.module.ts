import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponents } from './blog/blog.component';
import {BlogRoutingModule} from './blog/blog-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
@NgModule({
  declarations: [
    AppComponent,
    BlogComponents,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
