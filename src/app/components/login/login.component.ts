import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor(private toastr:ToastrService, private router:Router) { 
    this.loginForm=new FormGroup({
      username:new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')])
    })
  }

  onSubmit(){
    console.log('submit btn clicked');
    localStorage.setItem('username','test');
    var username=localStorage.getItem('username')
    console.log('username :' +username)

    localStorage.setItem('password','test');
    var password=localStorage.getItem('password');
    console.log('password :' +password)

    var user=this.loginForm.value.username
    console.log(user)

    var paswd=this.loginForm.value.password
    console.log(paswd)

    if(this.loginForm.value.username!=username || this.loginForm.value.password!=password){
      console.log('inside if condition');
      this.toastr.warning('incorrect username or password')
    }
    else{
      console.log('inside else condition')
      this.toastr.success('successfully logged-in');
      localStorage.setItem('user',user);
      localStorage.setItem('token','xyz');
      this.router.navigateByUrl('');
    }
  }
  

  ngOnInit(): void {
  }

}
