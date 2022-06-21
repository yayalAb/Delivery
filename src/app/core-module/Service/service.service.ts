import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



export const PASSENGER_API='http://localhost:8000/apis/v1/'
var headers = new HttpHeaders({'Content-Type': 'application/json'});


@Injectable()
export class ServiceService {

  constructor(private http:HttpClient, private router:Router ) { }

  postService(url:string, event:any){
    return this.http.post(PASSENGER_API+url, event,{headers}).subscribe(); 
  }
  getService(url:string){
      return this.http.get(PASSENGER_API+url);
  }
  async putService(url:string,event:any ){
    return this.http.put(PASSENGER_API+url, event,{headers}).subscribe(); 
    
  }
  deleteService(url:string){
    return this.http.delete(PASSENGER_API+url, {headers}).subscribe();
  }

  logout() :void {    
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token');    
    } 
}
