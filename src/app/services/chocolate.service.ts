import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ChocolateResponse } from '../interfaces/chocolate-response';

@Injectable({
  providedIn: 'root'
})

export class ChocolateDataService {
  constructor(private http: HttpClient) { }

  public getChocolate(): Observable<ChocolateResponse> {
    return this.http.get<ChocolateResponse>(environment.apiUrl);
  }
}
