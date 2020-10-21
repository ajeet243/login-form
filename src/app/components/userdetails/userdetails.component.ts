import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  public usr_details:any;
  public list:any=[];

  constructor(private _service:MyServiceService,private router:Router, private route:ActivatedRoute) {
    console.log('inside userdetails')
    var _id=this.route.snapshot.paramMap.get('id');
    this._service.single_user(_id).subscribe(data=>{
      console.log(data);
      this.usr_details=data.data;
      console.log(this.usr_details);
    })
  }

  ngOnInit(): void {
  }

}
