import { Component} from '@angular/core';
import { ProfileService } from '../profile-service/profile.service';
import {OnInit} from '@angular/core';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  view:any;
  repositories:any;
  gitUserName:string;

  ngOnInit() {
    this.ProfileService.getProfileRepositories().subscribe(repositories =>{console.log(repositories);
    this.repositories=repositories;
    });
 }
constructor(private ProfileService: ProfileService){}
 findProfile(){
  this.ProfileService.updateProfile(this.gitUserName);
  this.ProfileService.getProfileInfo().subscribe(view =>{console.log(view);
  this.view=view;
});
 }
} 
this.ProfileService.getProfileRepositories().subscribe(repositories =>{console.log(repositories);
this.repositories=repositories;
 });


