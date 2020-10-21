import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regex-validate',
  templateUrl: './regex-validate.component.html',
  styleUrls: ['./regex-validate.component.css']
})
export class RegexValidateComponent implements OnInit {
  public loginForm:FormGroup
  titleAlert: string = 'This field is required';


  constructor() { 
    this.loginForm=new FormGroup({
      username:new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required,Validators.minLength(5),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
       ])
    })
  }

  onSubmit(){
    debugger;
    console.log('Submit button clicked')
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password)
  }

  ngOnInit(): void {
  }

}
