import { Injectable } from '@angular/core';
import {BloodRecord} from '../../models/BloodRecord';
import {HttpClient} from '../../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloodRequestService {

  private baseUrl: string = "http://localhost:8080/";

  public bloodRecord = new BloodRecord();

  constructor(private http: HttpClient) { }

  getBloodRequest() {
    return this.http.get(this.baseUrl + 'requests');
  }

  deleteRequest(id: number) {
   return this.http.delete(this.baseUrl + 'requests/' + id);
 }

  approve(bloodRecord: BloodRecord): Observable<BloodRecord> {
    return this.http.post<BloodRecord>(this.baseUrl + 'approve', bloodRecord);
     
  }
  //
  // updateRecord(bloodRecord: BloodRecord) {
  //   return this.http.put(this.baseUrl + 'updateRecord', bloodRecord);
  // }
  //
  // setter(bloodRecord: BloodRecord) {
  //   this.bloodRecord = bloodRecord;
  // }
  //
  // getter() {
  //   return this.bloodRecord;
  // }

}




