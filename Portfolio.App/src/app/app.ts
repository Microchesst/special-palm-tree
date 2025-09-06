import { Component } from '@angular/core';
import { Scene } from './scene/scene';

@Component({
  selector: 'app-root',
  imports: [Scene],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
}
