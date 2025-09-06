import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.css']
})
export class Navigation {
  scrollTo(section: string) {
    const element = document.querySelector(`app-${section}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  }
}
