import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Booking } from '../interface/Booking';
import { Event } from '../interface/Event';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.css'],
})
export class EventDialogComponent {
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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EventDialogComponent>,
    private http: HttpClient,
    private router:Router,
  ) {
    this.event = data.event;
  }

  bookEvent(event: Event) {
    const confirmed = window.confirm(
      'Are you sure you want to book this event?'
    );
    if (confirmed) {
      console.log('Booking confirmed');
      console.log('Reduce availability and book the event');
      this.booking.eventId = event.id;
      const currentDate = new Date();
      const dateString = currentDate.toLocaleDateString();
      console.log(dateString);

      this.http
        .post('http://localhost:8080/bookings/add', this.booking)
        .subscribe(
          (response: any) => {
            if (response.success === true) {
              // Login successful
              console.log('success');
              console.log(response);
              this.router.navigate(['/booking'], { queryParams: { booking: JSON.stringify(this.booking), event: JSON.stringify(event) } });
            }
          },
          (error) => {
            console.log(error);
            
          }
        );

        this.dialogRef.close();

    } else {
      // User canceled the booking
      console.log('Booking canceled');
    }
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}
