import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDirectorComponent } from './edit-director/edit-director.component';
import { EditfilmformComponent } from './editfilmform/editfilmform.component';
import { DirectorComponent } from './movie/director/director.component';
import { FilmComponent } from './movie/film/film.component';
import { UpdatedirectorComponent } from './updatedirector/updatedirector.component';
import { UpdatefilmComponent } from './updatefilm/updatefilm.component';

const routes: Routes = [
  {
    path:'',component:FilmComponent
  },
  {
    path:'film',component:FilmComponent
  },
  {
    path:'director',component:DirectorComponent
  },

  {
    path:'editFilm',component:EditfilmformComponent
  },
  
  {
    path:'editDirector',component:EditDirectorComponent
  },
  {
    path:'updatefilm/:id',component:UpdatefilmComponent
  },
  {
    path:'updatedirector/:id',component:UpdatedirectorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
