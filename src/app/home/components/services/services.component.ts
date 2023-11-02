import { Component, OnInit } from '@angular/core';
import { ServiceItem } from '../../modal/service.modal';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
    services: ServiceItem[] = [
        {
            title: 'Mentorálás',
            description: 'Személyre szabott oktatás',
            image: '../../../assets/student.svg',
            price: 1000,
        },
        {
            title: 'Mentorálás Cégeknek',
            description: 'Cég által használt Angular tech stack oktatása',
            image: '../../../assets/mentor_for_business.svg',
            price: 1000,
        },
        {
            title: 'Tanfolyamok',
            description: 'Rendszeres tanóránkénti struktúra',
            image: '../../../assets/courses.svg',
            price: 1000,
        },
    ];

    constructor() {}

    ngOnInit() {}
}
