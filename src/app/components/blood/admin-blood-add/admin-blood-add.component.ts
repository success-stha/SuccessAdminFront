import { Component, OnInit } from '@angular/core';
import { BloodGroup } from '../../../models/BloodGroup';
import { SharedService } from '../../../services/shared/shared.service';


import { Router } from '@angular/router';
import { BloodService } from '../../../services/bloodService/blood.service';
import { BloodRecord } from '../../../models/BloodRecord';

@Component({
  selector: 'app-admin-blood-add',
  templateUrl: './admin-blood-add.component.html',
  styleUrls: ['./admin-blood-add.component.css']
})
export class AdminBloodAddComponent implements OnInit {
  public bloodRecord: any;
  bloodGroup: BloodGroup;
  selectedType: number=1;
  addType: String;

  constructor(private sharedService: SharedService, private bloodService: BloodService, private router: Router) { }

  ngOnInit() {

    this.bloodRecord = this.bloodService.getter();

    if (this.bloodRecord.bloodRecordId == undefined)
    this.addType="Add";
    else
    this.addType="Update";

    if (this.bloodRecord.bloodRecordId != undefined){
      this.selectedType = this.bloodRecord.bloodGroup.bloodGroupId;
    }

    this.sharedService.getBloodGroup()
      .subscribe((res) => {
        console.log(res);
        this.bloodGroup = res;
        this.bloodRecord.BloodGroupId = this.bloodGroup.bloodGroupId;
      }
      )
  }

  bloodForm() {
    if (this.bloodRecord.bloodRecordId == undefined) {
      this.bloodRecord.bloodGroupId = this.selectedType;
      this.bloodService.createRecord(this.bloodRecord).subscribe(() => {
        console.log(this.bloodRecord);
        this.router.navigate(['records']);
      },
        (error) => {
          console.log(error);
        })

    } else {
      this.bloodRecord.bloodGroup.bloodGroupId = this.selectedType;
      this.bloodService.updateRecord(this.bloodRecord)
        .subscribe((bloodRecord) => {
          console.log(bloodRecord);
          this.bloodService.setter(new BloodRecord());
          this.router.navigate(['records']);
        }, (error) => {
          console.log(error);
        });
    }
  }
}