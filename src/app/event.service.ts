import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }


  getEventsList(token: string): Observable<any> {

    token =  'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9qYW5nZWxiMSIsImlhdCI6MTU5NzcwNjUyMywiZXhwIjoxNTk3NzEwMTIzfQ.e-thZAfod9g-LE_G7KxFf806fWskpvWYjgfC7wT21hs';


    const requestOptions =  {
      headers: new HttpHeaders({
      'Authorization': token
      }),
    };
    return this.http.get(`${baseUrl}/events`, requestOptions);
  }
}
