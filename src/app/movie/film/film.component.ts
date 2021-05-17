import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmserviceService } from 'src/app/filmservice.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  noOfFilm = 0;
  film:any
  constructor(private service:FilmserviceService,private router:Router) { }

  ngOnInit(): void {
    this.service.getFilm().subscribe(data=>{
      this.film = data;
      console.log(data)
    })
  }

  delete(id:any){
    console.log("run delete")
    console.log(id)
    this.service.deleteFilm(id).subscribe(data=>{
      console.log(data)
      this.router.navigateByUrl('film')
    })
  }
  
 
}
