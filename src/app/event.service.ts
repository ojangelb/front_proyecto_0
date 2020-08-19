import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';

  token = 'Token ' + localStorage.getItem(this.JWT_TOKEN);

  eventsUrl = `${baseUrl}/events`;


  constructor(private http: HttpClient) { }

  getEventsList(token: string): Observable<any> {
    console.log( this.token);
    console.log(this.requestOptions())
    return this.http.get(this.eventsUrl, this.requestOptions());
  }

  createEvent(event: Object): Observable<Object> {
    return this.http.post(this.eventsUrl, event, this.requestOptions());
  }

  deleteEvent(id: string): Observable<any> {
    return this.http.delete(this.eventsUrl + '/' + id, this.requestOptions());
  }

  getEventId(id: string): Observable<any> {
    return this.http.get(this.eventsUrl + '/' + id, this.requestOptions());
  }

  updateEvent(id: string, value: any): Observable<Object> {
    return this.http.put(this.eventsUrl + '/' + id, value, this.requestOptions());
  }

  requestOptions() {
      return {
        headers: new HttpHeaders({
        'Authorization': this.token
        }),
      };
  }
}
