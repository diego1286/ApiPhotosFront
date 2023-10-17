import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    NavigationComponent,
    PhotoPreviewComponent,
    PhotoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
