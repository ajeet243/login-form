import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule,} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalDialog, UserComponent } from './components/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from 'src/material.module';
import { MyServiceService } from './my-service.service';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import {MatTableModule} from '@angular/material/table';
// import { MatTable } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { DeleteuserComponent } from './components/deleteuser/deleteuser.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { UsernotfoundComponent } from './components/usernotfound/usernotfound.component';
import { HeaderComponent } from './components/header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegexValidateComponent } from './components/regex-validate/regex-validate.component';
import { DialogContentExampleDialog, ModalDemoComponent } from './components/modal-demo/modal-demo.component';
import { ChildParentCallComponent } from './components/child-parent-call/child-parent-call.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserdetailsComponent,
    UserlistComponent,
    CreateuserComponent,
    DeleteuserComponent,
    UpdateuserComponent,
    UsernotfoundComponent,
    ModalDialog,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    RegexValidateComponent,
    ModalDemoComponent,
    DialogContentExampleDialog,
    ChildParentCallComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    // MatInputModule
    DemoMaterialModule,
    HttpClientModule,

    MatTableModule,
    // MatTable,
    MatDialogModule,
    MatButtonModule,
    MDBBootstrapModule.forRoot(),
    // MatCardModule

  ],
  providers: [,MyServiceService],
  entryComponents:[ModalDemoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
