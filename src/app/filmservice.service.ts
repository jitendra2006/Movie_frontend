import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmserviceService {

  constructor(private http:HttpClient) { }


  getFilm():Observable<any>{
    return this.http.get('http://localhost:8000/film')
  }

  getDirector(){
    return this.http.get('http://localhost:8000/director')

  }
  
  // Get perticular film
  getCurrentFilm(id:any):Observable<any>{
    return this.http.get(`http://localhost:8000/film/${id}`)
  }

  // Get perticular Director
  getCurrentDirector(id:any):Observable<any>{
    return this.http.get(`http://localhost:8000/director/${id}`)
  }


  setFilm(film:any){
    console.log(film)
    return this.http.post('http://localhost:8000/film',film);
  }

  setDirector(director:any){
    console.log(director)
    return this.http.post('http://localhost:8000/director',director);
  }

  // remove film
  deleteFilm(id:any){
    console.log(id)
    console.log("service")
    return this.http.delete(`http://localhost:8000/film/${id}`)

  }

  // delete director
  deleteDirector(id:any){
    console.log(id)
    console.log("service")
    return this.http.delete(`http://localhost:8000/director/${id}`)

  }

  // update film
  updateFilm(id:any,updatedData:any){
    console.log(id)
    return this.http.put(`http://localhost:8000/film/${id}`,updatedData)
  }

  // update film
  updateDirector(id:any,updatedData:any):Observable<any>{
    console.log(id)
    return this.http.put(`http://localhost:8000/director/${id}`,updatedData)
  }



}
