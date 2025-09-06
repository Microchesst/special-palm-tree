import { Component } from '@angular/core';
import { Portfolio } from './portfolio/portfolio';

@Component({
  selector: 'app-root',
  imports: [Portfolio],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
}
