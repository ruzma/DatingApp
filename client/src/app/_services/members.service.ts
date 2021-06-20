
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Member } from '../_models/member';



@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  token:String;

  constructor(private http: HttpClient) {
    var json = localStorage.getItem('user');
    console.log(json);
    var user = JSON.parse(json!);
    console.log(user);
    this.token =  user.token
    console.log(this.token);
   }

  getMembers(){
    return this.http.get<Member[]>(this.baseUrl + 'users');
  }

  getMember(username: string){
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }

  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token
      })
    }
  }
}
