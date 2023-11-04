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
            id: 'personal_mentor',
            price: 9.999,
        },
        {
            title: 'Mentorálás Cégeknek',
            description: 'Cég által használt Angular tech stack oktatása',
            id: 'mentor_for_business',
            image: '../../../assets/mentor_for_business.svg',
        },
        {
            title: 'Tanfolyamok',
            description: 'Rendszeres tanóránkénti struktúra',
            id: 'course',
            price: 79.999,
            image: '../../../assets/courses.svg',
        },
        {
            title: 'Egyedi Fejlesztés',
            description: 'Egeyedi igények alapján fejlesztünk',
            id: 'webapp_development',
            image: '../../../assets/background_code.png',
        },
    ];

    constructor() {}

    ngOnInit() {}
}
