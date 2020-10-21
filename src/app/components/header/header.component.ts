import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public _user:any;
  isLoggedIn:boolean=false;

  constructor(private toastr:ToastrService, private router:Router) { 
    var user=localStorage.getItem('username');
    if(user!='' && user!=undefined && user!=null){
      this._user=user;
      this.isLoggedIn=true;
    }
  }

  logOut(){
    console.log('inside logOut');
    localStorage.clear();
    window.location.reload();
    this.toastr.success('logged-out')
    // this.router.navigate([''])

  }

  home(){
    this.router.navigate([''])
  }


  ngOnInit(): void {
  }

}
