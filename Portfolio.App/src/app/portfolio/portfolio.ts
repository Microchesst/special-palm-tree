import { Component } from '@angular/core';
import { Frontend } from '../frontend/frontend';
import { Backend } from '../backend/backend';
import { SystemDesign } from '../system-design/system-design';

@Component({
  selector: 'app-portfolio',
  imports: [Frontend, Backend, SystemDesign],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class Portfolio {

}
