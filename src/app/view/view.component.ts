import { Component, OnInit } from '@angular/core';
import { ProfileService } from '/profile-service/profile.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  view:any;
  repositories:any;
  gitUserName:string;


constructor(private profileService: ProfileService){
 }
 findProfile(){
  this.profileService.updateProfile(this.gitUserName);
  this.profileService.getProfileInfo().subscribe(view =>{console.log(view);
  this.view=view;
});

this.profileService.getProfileRepositories().subscribe(repositories =>{console.log(repositories);
this.repositories=repositories;
 });

  ngOnInit() {
    this.profileService.getProfileRepositories().subscribe(repositories =>{console.log(repositories);
    this.repositories=repositories;
    });
 }

}
