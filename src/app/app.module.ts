import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectorComponent } from './movie/director/director.component';
import { FilmComponent } from './movie/film/film.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { EditfilmformComponent } from './editfilmform/editfilmform.component';
import { EditDirectorComponent } from './edit-director/edit-director.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdatefilmComponent } from './updatefilm/updatefilm.component';
import { UpdatedirectorComponent } from './updatedirector/updatedirector.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectorComponent,
    FilmComponent,
    AppNavigationComponent,
    EditfilmformComponent,
    EditDirectorComponent,
    UpdatefilmComponent,
    UpdatedirectorComponent,
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
