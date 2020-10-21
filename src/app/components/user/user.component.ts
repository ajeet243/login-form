import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyServiceService } from 'src/app/my-service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userform:FormGroup;
  fileToUpload: File = null;
  public isUpdate:boolean=false;
  public userlist:any;    
  public type:any;

  titleAlert: string = 'This field is required';
 

  getErrorEmail() {
    return this.userform.get('email').hasError('required') ? 'Field is required' :
      this.userform.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
        this.userform.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }


  constructor(private _service:MyServiceService,private toastr: ToastrService, private router:Router,private route:ActivatedRoute) {

    var id=this.route.snapshot.paramMap.get('id');
    console.log(id)
    if(id){
      this.type='Edit';
      this.editForm(id);
    }

    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.userform = new FormGroup({
      firstName : new FormControl('', Validators.required),
      lastName : new FormControl('', Validators.required),
      username : new FormControl('', Validators.required),
      phone : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      job : new FormControl('',Validators.required),
      address : new FormControl('', Validators.required),
      email : new FormControl('', [Validators.required, Validators.pattern(emailregex)]),
      pincode : new FormControl('',Validators.required)

    })
    this._service.userlist().subscribe(data=>{
      console.log(data)
      this.userlist=data.data;
    })
    
  }
 
  editForm(_id){
    console.log('inside editForm')
    this._service.single_user(_id).subscribe(data=>{
      console.log(data);
      console.log(data.data)
      console.log(data.data.avatar)

      console.log(data.ad)
      console.log(data.avatar)
      // this.userform.get('id').setValue(data.data.id);
      this.userform.get('firstName').setValue(data.data.first_name);
      this.userform.get('lastName').setValue(data.data.last_name);
      // this.userform.get('avatar').setValue(data.data.avatar);
      // this.userform.get('phone').setValue(data.phone);
      this.userform.get('email').setValue(data.data.email);
      // this.userform.get('address').setValue(data.address);
      // this.userform.get('pincode').setValue(data.pincode);

    })
  }


  // delete_user(row1){
  //   this.toastr.warning('are you sure, you want to delete this row!', 'Warning');

  //   this.userform.get('id').setValue(row1.id);
  //   var delid=row1.id;
    
  //   var i=0;
  //   this.userlist.forEach(x=>{
  //     if(x.id==delid){
  //       console.log("deleted index : " + i);
  //       this.userlist.splice(i,1);
  //       this.userlist;
  //       this.toastr.success('row is deleted successfully', 'success!');
  //     };
  //     i++;
  //   })
  // }

  onSubmit(params){
 
    if(!this.userform.valid)
    {
      this.toastr.warning('Kindly fill all the details.');
      return false;

    }

    console.log('submit btn clicked');
    console.log(params)

    var _user_id=params.user_id;
    var _name=params.name;
    console.log(_name)
    var _email=params.email;
    var _upload_img=params.upload_image;
    var _phone_no=params.phone;
    var _location=params.location;
    var _address=params.address;
    var job=params.job;

    this._service.create_user(_name,job).subscribe(data=>{
      console.log('inside userdata service')
      console.log(data)
      this.toastr.success('submitted successfully');
    })
    
  }

  existing_users(){
    console.log('existing_user btn clkd')
    this.router.navigate(['userlist'])
  }

  Update(){
    console.log("update");
  }

  update_user(row){
    this.isUpdate=true;
    console.log(row);
    this.userform.get('id').setValue(row.id);
    var editid=row.id;  
    this.userform.get('firstname').setValue(row.firstname);
    this.userform.get('lastname').setValue(row.lastname);
    this.userform.get('username').setValue(row.username);
    this.userform.get('phone').setValue(row.phone);
    this.userform.get('address').setValue(row.address);
    this.userform.get('email').setValue(row.email);
    this.userform.get('pincode').setValue(row.pincode);


    var i=0;
    this.userlist.forEach(x=>{
      if(x.id==editid){
        console.log("id updated : " + i);
        this.userlist.splice(i,1)
      };
      i++;
    })
    console.log(this.userlist);
  }

  // applyFilter(filterValue:string){
  //   this.dataSource.filter=filterValue.trim().toLowerCase();
  // }
  ngOnInit(): void {
  }

}


//dialog box component
@Component({
  selector: 'ModalDialog',
  templateUrl: './Modal.html',
})
export class ModalDialog {
  public inputData:any;

  constructor(public dialogRef: MatDialogRef<ModalDialog>,
     @Inject(MAT_DIALOG_DATA) public data: any) {
      this.inputData=data;
      console.log(this.inputData);
  }

  onNoClick(): void {
    this.dialogRef.close();
    console.log("Inside cancelbutton:");
    // var a="asd";
  }
  deleteuser()
  {
    // console.log(a);
    console.log("Inside delete user function");
    console.log(this.inputData);
  }

}
