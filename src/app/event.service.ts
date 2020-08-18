import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  token =  'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9qYW5nZWxiMSIsImlhdCI6MTU5Nzc3OTA2OCwiZXhwIjoxNTk3NzgyNjY4fQ.v8yiSZjVICMPO4mPEucvBoM7RymRTMMjU7ADmM2kav0';

  requestOptions =  {
    headers: new HttpHeaders({
    'Authorization': this.token
    }),
  };
  eventsUrl = `${baseUrl}/events`;


  constructor(private http: HttpClient) { }

  getEventsList(token: string): Observable<any> {
    return this.http.get(this.eventsUrl, this.requestOptions);
  }

  createEvent(event: Object): Observable<Object> {
    return this.http.post(this.eventsUrl, event, this.requestOptions);
  }

  deleteEvent(id: string): Observable<any> {
    return this.http.delete(this.eventsUrl + '/' + id, this.requestOptions);
  }

  getEventId(id: string): Observable<any> {
    return this.http.get(this.eventsUrl + '/' + id, this.requestOptions);
  }

  updateEvent(id: string, value: any): Observable<Object> {
    return this.http.put(this.eventsUrl + '/' + id, value, this.requestOptions);
  }
}
