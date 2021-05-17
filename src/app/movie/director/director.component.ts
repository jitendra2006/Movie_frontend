import { Component, OnInit } from '@angular/core';
import { FilmserviceService } from 'src/app/filmservice.service';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {

  director:any
  constructor(private service:FilmserviceService) { }

  ngOnInit(): void {
    this.service.getDirector().subscribe(data=>{
      this.director = data;
      console.log(data)
    })
  }

  delete(id:any){
    this.service.deleteDirector(id).subscribe(data=>{
      console.log(data) 
    })
  }

}
