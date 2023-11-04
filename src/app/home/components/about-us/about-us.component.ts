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
            description: '100% Elégedettség',
        },
        {
            title: 'Mentorálát órák száma',
            number: 20,
            description: 'Tudásmegosztás',
        },
        {
            title: 'Tanfolyamok',
            number: 1,
            description: 'Juniortól Szeniorig',
        },
        {
            title: 'Mentorok / Fejlesztők',
            number: 2,
            description: 'Szakemberek',
        },
    ];

    constructor() {}

    ngOnInit() {}
}
