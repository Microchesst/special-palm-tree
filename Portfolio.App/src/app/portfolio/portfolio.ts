import { Component } from '@angular/core';
import { Frontend } from '../frontend/frontend';
import { Backend } from '../backend/backend';
import { SystemDesign } from '../system-design/system-design';
import { Navigation } from '../navigation/navigation';

@Component({
  selector: 'app-portfolio',
  imports: [Frontend, Backend, SystemDesign, Navigation],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class Portfolio {

}
