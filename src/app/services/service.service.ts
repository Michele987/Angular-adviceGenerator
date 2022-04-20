import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { 

  }


  getAdvice(){
    let url = "https://api.adviceslip.com/advice"
    return this.http.get(url)
  }
}
