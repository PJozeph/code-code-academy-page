import { Component, Input, OnInit } from '@angular/core';
import { ServiceItem } from '../../modal/service.modal';

@Component({
    selector: 'app-services-card',
    templateUrl: './services-card.component.html',
    styleUrls: ['./services-card.component.scss'],
})
export class ServicesCardComponent implements OnInit {
    @Input() service: ServiceItem = {} as ServiceItem;

    constructor() {}

    ngOnInit() {}
}
