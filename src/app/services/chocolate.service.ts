import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { chocolateData } from '../../data/chocolate-data';
import { of } from 'rxjs';
import { Chocolate } from '../interfaces/chocolate';


@Injectable({
  providedIn: 'root'
})

export class ChocolateDataService {

  constructor(private _: HttpClient) { }

  // Add strategy pattern
  // Add http methods
  // Add configurtion via enviroment
  public getChocolateData(): Observable<Chocolate[]> {
    return of(chocolateData.data);
  }
}
