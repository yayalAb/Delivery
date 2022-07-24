import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user';

import { Observable } from 'rxjs';



export const PASSENGER_API='http://localhost:8000/apis/v1/'

export const BASE_URL='https://localhost:44344/api/';
var headers = new HttpHeaders({'Content-Type': 'application/json',
                                'mode': 'no-cors'});


@Injectable()
export class ServiceService {
user!: Observable<User>;

constructor(private http:HttpClient ) { }

getProduct(): Observable<any> {
  return this.http.get<any>("https://localhost:44344/api/Product",{headers});
}

loginUser(url:string){
    return this.http.get<User>(BASE_URL+url);
  }
logoutUser(){
localStorage.removeItem('token');
localStorage.removeItem('role');
}
  postService(url:string, event:any){
    return this.http.post(BASE_URL+url, event,{headers}).subscribe(); 
  }
  getService(url:string){
      return this.http.get(BASE_URL+url);
  }
  putService(url:string,event:any ){
    return this.http.put(BASE_URL+url, event,{headers}).subscribe(); 
    
  }
  deleteService(url:string){
    return this.http.delete(BASE_URL+url, {headers}).subscribe();
  }
}
