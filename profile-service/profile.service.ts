import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private gitUserName:string;
  private clientsecret='27c969407fe2146a312a660856ddec5e477dad52';

  constructor(private http:HttpClient) { 
    console.log("App ready");
    this.gitUserName='';
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.gitUserName + "?access_token=" + this.clientsecret)
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.gitUserName + "/repos?access_token=" + this.clientsecret)
  }
  updateProfile(gitUserName:string){
    this.gitUserName = gitUserName;
  }
}


