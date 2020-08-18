import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor( private http: HttpClient) { }
  login(data: any): Observable<any> {
    console.log('Loging...');
    return this.http.post(`${baseUrl}/api-auth/`, data);
  }
}
