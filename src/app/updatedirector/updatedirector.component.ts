import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Director } from '../director';
import { FilmserviceService } from '../filmservice.service';

@Component({
  selector: 'app-updatedirector',
  templateUrl: './updatedirector.component.html',
  styleUrls: ['./updatedirector.component.css']
})
export class UpdatedirectorComponent implements OnInit {

  id:any;
  DirectorObj = new Director('','','','')
  constructor(private service:FilmserviceService,private activateroute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    console.log("direct init")
    console.log(this.activateroute.snapshot.params.id)
    this.service.getCurrentDirector(this.activateroute.snapshot.params.id).subscribe(data=>{
      console.log(data) 
      this.id = data._id;
      console.log(data.name)
      this.DirectorObj.name = data.name;
      this.DirectorObj.age = data.age;
      this.DirectorObj.gender = data.gender
      this.DirectorObj.award = data.awardCount;
      console.log(this.DirectorObj)
    })
  }

  save(){
    console.log("update called")
    this.service.updateDirector(this.id,this.DirectorObj).subscribe(data=>{
      this.route.navigateByUrl('director')
    })
  }

}
