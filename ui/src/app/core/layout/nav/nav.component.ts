import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet  } from '@angular/router';


@Component({
  selector: 'app-nav',
  imports: [MatIconModule, MatMenuModule, MatButtonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
