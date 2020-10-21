import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { DeleteuserComponent } from './components/deleteuser/deleteuser.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ModalDemoComponent } from './components/modal-demo/modal-demo.component';
import { RegexValidateComponent } from './components/regex-validate/regex-validate.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { UserComponent } from './components/user/user.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { UserlistComponent } from './components/userlist/userlist.component';


const routes: Routes = [
  { path:'' , component:UserComponent},
  { path: 'user', component:UserComponent},
  { path: 'user/:id', component:UserComponent},
  { path:'userlist', component:UserlistComponent},
  { path:'userdetails/:id', component:UserdetailsComponent},
  { path:'createuser', component:CreateuserComponent},
  { path: 'update_user', component:UpdateuserComponent},
  { path: 'deleteuser', component:DeleteuserComponent},
  { path: 'header', component:HeaderComponent},
  { path: 'login', component:LoginComponent},
  { path: 'regexvalid', component:RegexValidateComponent},
  { path: 'modal_demo', component:ModalDemoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
