import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Student, User } from 'src/app/models/user';

import { map, Observable } from 'rxjs';

import { Passanger } from './tutorial/tutorial/tutorial.component';





export const PASSENGER_API='http://localhost:8000/apis/v1/'
var headers = new HttpHeaders({'Content-Type': 'application/json'});


@Injectable()
export class ServiceService {
constructor(private http:HttpClient, private router:Router ) { }

// getPassenger(): Observable<Passanger[]>{

// // return this.http.get(PASSENGER_API+"passenger").pipe(map(response:Response)=>response);
// return this.http.get(<Passanger[]>(PASSENGER_API+"passenger")).pipe(map(response => response));

// }
 
getPassenger(): Observable<Passanger[]> {
  return this.http.get<Passanger[]>(PASSENGER_API+"passenger");
}



loginUser(url:string, event:User){
    return this.http.get(PASSENGER_API+url);
  }
logoutUser(){
localStorage.removeItem('token');
localStorage.removeItem('role');
// localStorage.setItem('is')
}
  postService(url:string, event:any){
    return this.http.post(PASSENGER_API+url, event,{headers}).subscribe(); 
  }
  getService(url:string){
      return this.http.get(PASSENGER_API+url);
  }
  putService(url:string,event:any ){
    return this.http.put(PASSENGER_API+url, event,{headers}).subscribe(); 
    
  }
  deleteService(url:string){
    return this.http.delete(PASSENGER_API+url, {headers}).subscribe();
  }
}
