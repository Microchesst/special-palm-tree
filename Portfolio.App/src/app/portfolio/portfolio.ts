import { Component } from '@angular/core';
import { FrontendComponent } from '../frontend/frontend';
import { BackendComponent } from '../backend/backend';
import { SystemDesignComponent } from '../system-design/system-design';

@Component({
  selector: 'app-portfolio',
  imports: [FrontendComponent, BackendComponent, SystemDesignComponent],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class Portfolio {

}
