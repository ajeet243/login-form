import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  public update_user:any;
  constructor(private _service:MyServiceService) { 
    this._service.update_user().subscribe(data=>{
      console.log(data);
      this.update_user=data
    })
  }

  ngOnInit(): void {
  }

}
