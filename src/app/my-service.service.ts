import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private _http:HttpClient) { }

  userdata_submited(user_id:number,name:string, email:string,image:string,phone:number,location:string,address:string,){
    var _url="http://localhost:3000/userlist";
    var _body={
      user_id:user_id,
      name: name,
      email: email,
      image:image,
      phone: phone,
      location:location,
      address: address
    };
    return this._http.post(_url,_body)
  }

  // getting data for userlist from jsonfile
  userlist():Observable<any>{
    var _url="https://reqres.in/api/users?page=2";
    return this._http.get(_url);
  }

  //getting userdetails
  single_user(userid):Observable<any>{
    var _url="https://reqres.in/api/users/"+userid;
    return this._http.get(_url);
  }

  create_user(name,job):Observable<any>{
    var _url="https://reqres.in/api/users";
    var _body={
      "name": name,
      "job": job
    }
    return this._http.post(_url,_body)
  }

  update_user():Observable<any>{
    var _url="https://reqres.in/api/users/2";
    var _body={ 
      "name": "morpheus",
      "job": "zion resident"
    }
    return this._http.put(_url,_body)
  }

  delete_user():Observable<any>{
    var _url="https://reqres.in/api/users/2";
    return this._http.delete(_url);
  }

}
