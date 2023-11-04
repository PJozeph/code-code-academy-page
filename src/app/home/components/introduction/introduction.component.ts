import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent  {

  constructor() { }

  scrollToServices() {
    document.getElementById('services')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'start',
    });
}

}
