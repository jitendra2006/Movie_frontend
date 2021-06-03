import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Film } from '../film';
import { FilmserviceService } from '../filmservice.service';
@Component({
  selector: 'app-editfilmform',
  templateUrl: './editfilmform.component.html',
  styleUrls: ['./editfilmform.component.css']
})
export class EditfilmformComponent implements OnInit {

  directorArr:any;
  name:any
  FilmObj = new Film(10,'','','','','');
  constructor(private service:FilmserviceService,private router:Router) {
    
   }

  ngOnInit(): void {

    this.service.getDirector().subscribe(data=>{
      this.directorArr = data;
      console.log(data)
      console.log(this.directorArr)
    })
  }

  save(){
    console.log("runn")
    console.log(this.FilmObj)
    console.log(this.FilmObj.id)
    console.log(this.FilmObj.name)
    this.service.setFilm(this.FilmObj).subscribe(data=>{
      this.router.navigateByUrl('film')
    })

  }
}
