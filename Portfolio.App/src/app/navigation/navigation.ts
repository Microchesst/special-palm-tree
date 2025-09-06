import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.css']
})
export class Navigation {
  scrollTo(section: string) {
    const container = document.querySelector('.portfolio-container');
    const element = document.querySelector(`app-${section}`);
    if (container && element) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      container.scrollTo({
        left: elementRect.left - containerRect.left + container.scrollLeft,
        behavior: 'smooth'
      });
    }
  }
}
