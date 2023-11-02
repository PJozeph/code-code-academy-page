import { Component, Input, OnInit } from '@angular/core';
import { AboutUs } from '../../modal/aboutus-modal';

@Component({
    selector: 'app-about-us-card',
    templateUrl: './about-us-card.component.html',
    styleUrls: ['./about-us-card.component.scss'],
})
export class AboutUsCardComponent implements OnInit {
    @Input() aboutUs: AboutUs = {} as AboutUs;

    constructor() {}

    ngOnInit() {}
}
