import { Component, Input, OnInit } from '@angular/core';
import { Teacher } from '../../modal/teacher-modal';

@Component({
    selector: 'app-teacher-card',
    templateUrl: './teacher-card.component.html',
    styleUrls: ['./teacher-card.component.scss'],
})
export class TeacherCardComponent  {
    @Input() teacher: Teacher = {} as Teacher;

    onLinkClick(link: string) {
        window.open(link, '_blank');
    }
}
