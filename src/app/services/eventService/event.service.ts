import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../../models/Event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl: string = "http://localhost:8080/";
  public event = new Event();

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get(this.baseUrl + 'events');
  }

  deleteEvent(id: number) {
    return this.http.delete(this.baseUrl + 'events/' + id);
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.baseUrl + 'saveEvent', event);
  }

  updateEvent(event: Event) {
    return this.http.put(this.baseUrl + 'updateEvent', event);
  }

  setter(event: Event) {
    this.event = event;
  }

  getter() {
    return this.event;
  }

}