import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  public create_user:any;

  constructor(private _service:MyServiceService) { 
    this._service.create_user('asd','asd').subscribe(data=>{
      console.log(data)
      this.create_user=data
      console.log(this.create_user)
    })
  }

  ngOnInit(): void {
  }

}
