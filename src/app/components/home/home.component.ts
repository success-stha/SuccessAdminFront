import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public details:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }


filter(f)
{
console.log(f.value.fromDate);
  this.http.get("http://localhost:8080/filter/"+ f.value.fromDate+"/"+f.value.toDate)
.subscribe(
  (res) =>{ console.log(res);
  this.details=res;}
)
}
}