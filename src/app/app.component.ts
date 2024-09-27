import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { P1loginComponent } from './p1login/p1login.component';
import { P2homeComponent } from './p2home/p2home.component';
import { P3navbarComponent } from './p3navbar/p3navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,P1loginComponent,P2homeComponent,P3navbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myproject1';
}
