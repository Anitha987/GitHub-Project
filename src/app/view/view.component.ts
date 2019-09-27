import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service/profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  userName:string = "";
  response:any;
  gitUsersProfile:string;


constructor(private http:HttpClient){
 
}

  ngOnInit() {
  }
// search(){
//   // this.http.get("https://api.github.com/users/" * this.userName)
//   .subscribe((response) =>{
//     this.response = response;
//     console.log(this.response);
//   })
//  }
}
