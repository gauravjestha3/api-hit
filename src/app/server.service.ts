import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor(private http:HttpClient) { }
  storeServers(servers:any[]){
  return this.http.post('https://gaurav-project-c0817.firebaseio.com/akash.json',servers);
  }
  getServers():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/photos').pipe(map(data=>data))
   
  }
}
