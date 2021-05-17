import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../film';
import { FilmserviceService } from '../filmservice.service';

@Component({
  selector: 'app-updatefilm',
  templateUrl: './updatefilm.component.html',
  styleUrls: ['./updatefilm.component.css']
})
export class UpdatefilmComponent implements OnInit {

  id:any
  FilmObj = new Film('','','','','')
  constructor(private service:FilmserviceService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.service.getCurrentFilm(this.router.snapshot.params.id).subscribe(data=>{
      console.log(data)
      this.id = data._id;
      console.log(data.name)
      this.FilmObj.id = data.id;
      this.FilmObj.name = data.name;
      this.FilmObj.director = data.directors;
      this.FilmObj.rating = data.rating
      this.FilmObj.collection = data.boxOfficeCollection;

      console.log(this.FilmObj)
    })


  }

  save(){
    console.log("update called")
    this.service.updateFilm(this.id,this.FilmObj).subscribe(data=>{
      this.route.navigateByUrl('film')
    })
  }

}
