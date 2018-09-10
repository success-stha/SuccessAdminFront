import { Component, OnInit } from '@angular/core';
import { BloodRecord } from '../../../models/BloodRecord';
import { BloodService } from '../../../services/bloodService/blood.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-blood',
  templateUrl: './view-blood.component.html',
  styleUrls: ['./view-blood.component.css']
})
export class ViewBloodComponent implements OnInit {

  private bloodRecords: BloodRecord[];

  constructor(private bloodService: BloodService, private router: Router) { }

  ngOnInit() {
    this.bloodService.getRecords().subscribe((bloodRecords: any) => {
      console.log(bloodRecords);
      this.bloodRecords = bloodRecords;
    }, (error) => {
      console.log(error);
    })
  }

  deleteRecord(record) {
    this.bloodService.deleteRecord(record.bloodRecordId).subscribe(() => {
      this.bloodRecords.splice(this.bloodRecords.indexOf(record), 1);
    }, (error) => {
      console.log(error);

    });
  }


  updateRecord(record) {
    this.bloodService.setter(record);
    this.router.navigate(['/addblood']);
  }

  newRecord() {
    let record = new BloodRecord();
    this.bloodService.setter(record);
    this.router.navigate(['/addblood']);

  }
}
