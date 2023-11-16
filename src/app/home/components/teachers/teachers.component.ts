import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../modal/teacher-modal';

@Component({
    selector: 'app-teachers',
    templateUrl: './teachers.component.html',
    styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit {
    teachers: Teacher[] = [
        {
            name: 'Pallagi József',
            description: 'Full Stack Fejlesztő Frontend Focus [Angular, Java]',
            image: '../../../../assets/profile_pictures/jozsef-image.jpg',
            linkedin: 'https://www.linkedin.com/in/jozsef-pallagi/',
            github: 'https://github.com/PJozeph',
        },
        {
            name: 'Hummer András',
            description: 'Senior Backend Java Fejlesztő',
            image: '../../../../assets/profile_pictures/hummer_andris.jpeg',
            linkedin: 'https://www.linkedin.com/in/ahummer/',
            github: 'https://github.com/hnhpo',
        },
        {
            name: 'Jonuczás Norbert',
            description: 'Senior Backend .Net Fejlesztő',
            image: '../../../../assets/profile_pictures/norbi.jpeg',
            linkedin: 'https://www.linkedin.com/in/jonucz%C3%A1s-norbert-74217083/',
        },
    ];

    constructor() {}

    ngOnInit() {}
}
