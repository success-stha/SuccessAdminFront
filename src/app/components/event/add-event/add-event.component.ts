import { Component, OnInit } from '@angular/core';
import { Event } from '../../../models/Event'
import { EventService } from '../../../services/eventService/event.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  public event: Event;

  constructor(private eventService: EventService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.event = this.eventService.getter();
  }

  processForm() {
    if (this.event.eventId == undefined) {
      this.eventService.createEvent(this.event).subscribe(() => {
        console.log(this.event);
        this.router.navigate(['/events']);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.eventService.updateEvent(this.event).subscribe((event) => {
        console.log(event);
        this.router.navigate(['/events']);
      }, (error) => {
        console.log(error);
      });
    }
  }
}
