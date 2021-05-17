import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Director } from '../director';
import { FilmserviceService } from '../filmservice.service';
// import {Director} from '../director'
@Component({
  selector: 'app-edit-director',
  templateUrl: './edit-director.component.html',
  styleUrls: ['./edit-director.component.css']
})
export class EditDirectorComponent implements OnInit {

  DirectorObj = new Director('','','','');

  constructor(private service:FilmserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.DirectorObj)
    this.service.setDirector(this.DirectorObj).subscribe(data=>{
      console.log(data)
      this.router.navigateByUrl('director')

    })

  }


}
