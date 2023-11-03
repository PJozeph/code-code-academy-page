import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../modal/teacher-modal';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent  implements OnInit {

  teachers : Teacher [] = [
    {
      name: 'Pallagi József',
      description: 'I am a freelancer Frontend developer with over 6 years of experience',
      image: 'https://via.placeholder.com/150',
      linkedin: 'https://www.linkedin.com/in/jozsef-pallagi/',
      github: 'https://github.com/PJozeph',
    }
  ]

  constructor() { }

  ngOnInit() {}



}
