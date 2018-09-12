import { Component, OnInit } from '@angular/core';
import {BloodRequestService} from '../../services/bloodrequest-service/blood-request.service';
import {BloodRecord} from '../../models/BloodRecord';
import {forEach} from '../../../../node_modules/@angular/router/src/utils/collection';

@Component({
  selector: 'app-blood-request',
  templateUrl: './blood-request.component.html',
  styleUrls: ['./blood-request.component.css']
})
export class BloodRequestComponent implements OnInit {
  bloodRequestData: BloodRecord[];

  constructor(private bloodRequest: BloodRequestService) { }

  ngOnInit() {
    this.getBloodRequest()
  }

  getBloodRequest(){
    this.bloodRequest.getBloodRequest().subscribe((data:any) => {
      if (data){
        this.bloodRequestData = data;
      }
    });
  }

  approveRequest(id){
    let record;
    for (let a of this.bloodRequestData){
      if (id == a.bloodRequestId){
        record = a;
      }
    }

    this.bloodRequest.approve(record).subscribe((data:any) => {
      if (data){
      }
    });
  }

  denyRequest(b) { 
    if(window.confirm('Are sure you want to deny this request ?')){
    this.bloodRequest.deleteRequest(b.bloodRequestId).subscribe(() => {
      this.bloodRequestData.splice(this.bloodRequestData.indexOf(b), 1);
    }, (error) => {
      console.log(error);
    });}
  }
}

