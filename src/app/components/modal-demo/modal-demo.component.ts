import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyServiceService } from 'src/app/my-service.service';
import { ModalDialog } from '../user/user.component';
// import { React}
// import { UserComponent } from '../../components/user/user.component';


@Component({
  selector: 'app-modal-demo',
  templateUrl: './modal-demo.component.html',
  styleUrls: ['./modal-demo.component.css']
})
export class ModalDemoComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}

// class for dialog
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'DialogContentExampleDialog.html',
})
export class DialogContentExampleDialog {
  inputData:any;
  modalform:FormGroup;
  public arr=[];

  constructor(public dialogRef: MatDialogRef<DialogContentExampleDialog>,
  @Inject(MAT_DIALOG_DATA) public data:any){

    this.modalform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required,Validators.email]),
      login_id: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })

    console.log('inside modal class')
    this.inputData=data;
    console.log(this.inputData);
  }

  onCancel(){
    this.dialogRef.close();
  }

  onSubmit(param){
    console.log('modal submit btn clkd');
    let data={
      name:this.modalform.value.name,
      email:this.modalform.value.email,
      login_id:this.modalform.value.login_id,
      password:this.modalform.value.password
    }
    this.arr.push(data);
    console.log(this.arr)
  }

}
