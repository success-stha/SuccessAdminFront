import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BloodCount } from '../../models/BloodCount';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-blood-count',
  templateUrl: './view-blood-count.component.html',
  styleUrls: ['./view-blood-count.component.css']
})
export class ViewBloodCountComponent implements OnInit {
bloodCount:any;
  constructor(private http:HttpClient) { }

  ngOnInit(){
    this.http.get("http://localhost:8080/getBloodCount")
    .subscribe(
      (res) => {
        console.log(res);
        this.bloodCount=res;}
    )
  }

}
