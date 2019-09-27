import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile-service/profile.service';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private svc:ProfileService,private http:HttpClient){
    this.svc.printToConsole("  ");
  }
}
ngOnInit() {
  let ani = this.http.get("https://api.github.com/users/daneden")
  ani.subscribe((response)=>console.log("response"));
 }
}
