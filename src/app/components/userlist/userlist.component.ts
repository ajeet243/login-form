import { Component, OnInit, ViewChild } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
// import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  public usr_list:any;
  // public userdata=[{name:'mahesh', id:1, phone:132323534, address:'bangalore',},
  //               {name:'ajay', id:2, phone:34345446445,address:'pune'},
  //               {name:'basu', id:3, phone:433544555,address:'mumbai'},
  //               {name:'jeevan', id:4, phone:67676686786,address:'kolkata'}
              // ]
  displayedColumns=['id','first_name', 'email', 'details','Edit', 'Action']

  // public dataSource=this.usr_list;
   dataSource: MatTableDataSource<any>;;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort

  constructor(private _service:MyServiceService, private route:ActivatedRoute, private router:Router, public _toastr:ToastrService) {

    this._service.userlist().subscribe(data=>{
      console.log(data);
      this.usr_list=data.data;
      console.log(this.usr_list)
      this.dataSource=this.usr_list;
      console.log(this.dataSource)
    })
  }

  details(id){
    console.log('inside details')
    this.router.navigate(['userdetails',id])

  }

  Edit(id){
    console.log('inside details')
    this.router.navigate(['user',id])
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  update_user(row){
    console.log(row);
    this.usr_list.get('id').setValue(row.id);
    var editid=row.id;  
    this.usr_list.get('name').setValue(row.firstname);
    this.usr_list.get('email').setValue(row.lastname);
    this.usr_list.get('username').setValue(row.username);
    this.usr_list.get('phone').setValue(row.phone);
    this.usr_list.get('address').setValue(row.address);
    this.usr_list.get('email').setValue(row.email);
    this.usr_list.get('pincode').setValue(row.pincode);


    var i=0;
    this.usr_list.forEach(x=>{
      if(x.id==editid){
        console.log("id updated : " + i);
        this.usr_list.splice(i,1)
      };
      i++;
    })
    console.log(this.usr_list);
  }
  
  // delete a row
  delete_user(){

    this._service.delete_user().subscribe(data=>{
      console.log(data)
      this.delete_user=data.data;
      console.log(this.delete_user)
    })
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
