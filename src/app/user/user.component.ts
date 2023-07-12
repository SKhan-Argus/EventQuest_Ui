import { Component } from '@angular/core';
import { Event } from '../interface/Event';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  eventName: string = '';
  eventLocation: string = '';
  events:Event[]=[];

  constructor(private http: HttpClient) {}

  searchEventsWithName() {

    this.http.get(`http://localhost:8080/events/name?name=${this.eventName}`).subscribe(
      (response:any) => {
        this.events = response;
        console.log(this.events);
        
        
       }, (error) => {
        console.log(error);
        
       });


  }
  searchEventsWithLocation() {
    this.http.get(`http://localhost:8080/events/location?location=${this.eventLocation}`).subscribe(
      (response:any) => {
        this.events = response;
        console.log(this.events);
        
        
       }, (error) => {
        console.log(error);
        
       });
  }
  bookEvent(event:Event){}
}
