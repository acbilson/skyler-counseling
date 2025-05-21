import { Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-countdown',
  imports: [
    DatePipe,
  ],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements AfterViewInit {

  launchDate: Date = new Date('2025-07-27T00:00:00Z');

  constructor() { }

    ngAfterViewInit() {
    const now = new Date();
    const timeDiff = this.launchDate.getTime() - now.getTime();
    const daysRemaining = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const clock = document.querySelector('#clock');
    if (clock) {
      // add hours, minutes, and seconds
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      clock.textContent = `${daysRemaining} ${hours}:${minutes}:${seconds}`;
    }
  }

}
