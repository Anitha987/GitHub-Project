import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private gitUsername:string;
private clientsecret='27c969407fe2146a312a660856ddec5e477dad52';
// }
//   constructor(private https:HttpClient) { 
//     console.log("App ready");
//     this.gitUsersProfile='';
//   }
//   getProfileInfo(){
//     return this.http.get("https://api.github.com/users/" + this.gitUsersProfile + "?access_token=" + this.clientsecret)
//   }
//   getProfileRepos(){
//     return this.http.get("https://api.github.com/users/" + this.gitUsersProfile + "/repos?access_token=" + this.clientsecret)
//   }
//   updateProfile(gitUserProfile:string){
//     this.gitUsersProfile = gitUsersProfile;
  }


