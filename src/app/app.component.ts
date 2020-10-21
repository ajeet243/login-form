import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'addEmployee';

  public userdetails:boolean=false;
  public showHead:boolean=true;

  constructor(private router:Router){
    // on route change to '/login' set the variable showhead to false
    router.events.forEach((event) => {
      if(event instanceof NavigationStart){
        if(event['url'] == '/login'){
          this.showHead = false;
        }
        else{
          this.showHead = true;
        }
      }
    })
  }
}
