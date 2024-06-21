import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PequeStarsProject';

  constructor(private elementRef: ElementRef) {}

  scrollToMenu() {
    const element = this.elementRef.nativeElement.querySelector('#our-menu');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  scrollToCine() {
    const element = this.elementRef.nativeElement.querySelector('#cine');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  scrollToAbout() {
    const element = this.elementRef.nativeElement.querySelector('#about-us');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  scrollToFooter() {
    const element = this.elementRef.nativeElement.querySelector('#footer');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
