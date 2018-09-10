import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BloodRecord } from '../../models/BloodRecord';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloodService {

  private baseUrl: string = "http://localhost:8080/";
  public bloodRecord = new BloodRecord();

  constructor(private http: HttpClient) { }

  getRecords() {
    return this.http.get(this.baseUrl + 'records');
  }

  deleteRecord(id: number) {
    return this.http.delete(this.baseUrl + 'records/' + id);
  }

  createRecord(bloodRecord: BloodRecord): Observable<BloodRecord> {
    return this.http.post<BloodRecord>(this.baseUrl + 'saveRecord', bloodRecord);
  }

  updateRecord(bloodRecord: BloodRecord) {
    return this.http.put(this.baseUrl + 'updateRecord', bloodRecord);
  }

  setter(bloodRecord: BloodRecord) {
    this.bloodRecord = bloodRecord;
  }

  getter() {
    return this.bloodRecord;
  }

}



