import { Component, Input, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss',
})
export class CountdownComponent implements OnInit, OnDestroy {
  @Input() targetDate: Date = new Date(Date.now() + 24 * 60 * 60 * 1000); // Default: 24 hours from now

  private intervalId: number | null = null;
  private currentTime = signal(new Date());

  timeRemaining = computed(() => this.calculateTimeRemaining());

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    this.stopCountdown();
  }

  private startCountdown(): void {
    this.updateCurrentTime();
    this.intervalId = window.setInterval(() => {
      this.updateCurrentTime();
    }, 1000);
  }

  private stopCountdown(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private updateCurrentTime(): void {
    this.currentTime.set(new Date());
  }

  private calculateTimeRemaining(): TimeRemaining {
    const now = this.currentTime();
    const target = this.targetDate;
    const timeDiff = target.getTime() - now.getTime();

    if (timeDiff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: true
      };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
      isExpired: false
    };
  }

  formatNumber(num: number): string {
    return num.toString().padStart(2, '0');
  }
}
