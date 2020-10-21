import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
  public delete_user:any;
  constructor(private _service:MyServiceService) { 
    this._service.delete_user().subscribe(data=>{
      console.log(data);
      this.delete_user=data
    })
  }

  ngOnInit(): void {
  }

}