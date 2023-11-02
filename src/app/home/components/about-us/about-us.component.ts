import { Component, OnInit } from '@angular/core';
import { AboutUs } from '../../modal/aboutus-modal';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
    aboutUS: AboutUs[] = [
        {
            title: 'Tanulók száma',
            number: 3,
            description: 'Lorem ipsum dol',
        },
        {
            title: 'Mentorálát órák száma',
            number: 20,
            description: 'Lorem ipsum dol',
        },
        {
            title: 'Tanfolyamok',
            number: 1,
            description: 'Lorem ipsum dol',
        },
        {
            title: 'Mentorok',
            number: 2,
            description: 'Lorem ipsum dol',
        },
    ];

    constructor() {}

    ngOnInit() {}
}
