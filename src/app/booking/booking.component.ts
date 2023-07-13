import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../interface/Event';
import { Booking } from '../interface/Booking';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements AfterViewInit {
  @ViewChild('content', { static: false }) el!: ElementRef;
  title = 'Booking Bill';

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

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.queryParams.subscribe((params) => {
      this.booking = JSON.parse(params['booking']);
      this.event = JSON.parse(params['event']);
      this.booking.totalPrice = this.booking.ticketQuantity * 250;
    });
  }

  generatePdf() {
    
    const doc = new jsPDF();
    
    const elementToExport = this.el.nativeElement;

    html2canvas(elementToExport).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      doc.addImage(imgData, 'PNG', 10, 10, 190, 0);
      doc.save(`eventQuestBill${this.booking.id}`);
    });
  }
}
