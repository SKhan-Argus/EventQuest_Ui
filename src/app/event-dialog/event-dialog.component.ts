import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Booking } from '../interface/Booking';
@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.css']
})
export class EventDialogComponent {
  event: any;
  booking:Booking={
    eventId:0,
    id:0,
    userId:0,
    bookingDate:'',
    ticketQuantity:0,
    totalPrice:0,
    status:''
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef:MatDialogRef<EventDialogComponent>) {
    this.event = data.event;
  }

  bookEvent(event:Event){
    console.log("booking");
    
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}
