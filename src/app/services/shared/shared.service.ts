import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { District } from '../../models/District';
import { BloodGroup } from '../../models/BloodGroup';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  url: string = "http://localhost:8080/";
  district: District;
  bloodGroup: BloodGroup;

  constructor(private http: HttpClient) { }

  getDistricts(): Observable<District> {
    return this.http.get<District>(this.url + 'districts');
  }

  getBloodGroup(): Observable<BloodGroup> {
    return this.http.get<BloodGroup>(this.url + 'bloodtypes');
  }
}
