import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../interface/Event';
import { Booking } from '../interface/Booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  event: Event = {
    id: 0,
    name: '',
    date: '',
    time: '',
    location: '',
    description: '',
    availability: 0,
  };

  booking: Booking = {
    eventId: 0,
    id: 0,
    userId: 0,
    bookingDate: '',
    ticketQuantity: 1,
    totalPrice: 0,
    status: '',
  };


  constructor(private route:ActivatedRoute){}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.booking = JSON.parse(params['booking']);
      this.event = JSON.parse(params['event']);
      this.booking.totalPrice = this.booking.ticketQuantity*250;
      // Use the booking and event objects as needed
    });
  }
}
