import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

    router: Router = inject(Router);

    onLogoClick() {
        this.router.navigate(['']);
    }
}
