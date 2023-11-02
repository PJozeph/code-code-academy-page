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
      name: 'Kiss József',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
      image: 'https://via.placeholder.com/150',
      linkedin: 'https://www.linkedin.com/in/j%C3%B3zsef-kiss-9a1b0a1a4/',
      github: '',
    }
  ]

  constructor() { }

  ngOnInit() {}



}
