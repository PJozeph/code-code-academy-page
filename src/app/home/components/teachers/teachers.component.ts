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
            description: 'Hat év tapasztalattal rendelkező szabadúszó frontend fejlesztő',
            image: '../../../../assets/profile_pictures/jozsef-image.jpg',
            linkedin: 'https://www.linkedin.com/in/jozsef-pallagi/',
            github: 'https://github.com/PJozeph',
        },
        {
            name: 'Hummer András',
            description: 'Tapasztalt szoftverfejlesztő, akinek bizonyított referenciái vannak',
            image: '../../../../assets/profile_pictures/hummer_andris.jpeg',
            linkedin: 'https://www.linkedin.com/in/ahummer/',
            github: 'https://github.com/hnhpo',
        },
    ];

    constructor() {}

    ngOnInit() {}
}
