import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceItem } from '../../modal/service.modal';

@Component({
    selector: 'app-services-card',
    templateUrl: './services-card.component.html',
    styleUrls: ['./services-card.component.scss'],
})
export class ServicesCardComponent {
    @Input() service: ServiceItem = {} as ServiceItem;

    router: Router = inject(Router);

    onDetailsClick() {
        console.log("this.service.id");
        this.router.navigate(['details', this.service.id]);
    }
}
