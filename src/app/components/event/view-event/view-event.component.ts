import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/eventService/event.service';
import { Router } from '@angular/router';
import { Event } from '../../../models/Event';


@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  private events: Event[];

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe((events: any) => {
      console.log(events);
      this.events = events;
    }, (error) => {
      console.log(error);
    })
  }

  deleteEvent(event) {
    this.eventService.deleteEvent(event.eventId).subscribe(() => {
      this.events.splice(this.events.indexOf(event), 1);
    }, (error) => {
      console.log(error);
    });
  }

  updateEvent(event) {
    this.eventService.setter(event);
    this.router.navigate(['/addevent']);
  }

  newEvent() {
    let event = new Event();
    this.eventService.setter(event);
    this.router.navigate(['/addevent']);
  }
}
