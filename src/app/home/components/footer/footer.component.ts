import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    private router: Router = inject(Router);

    constructor() {}

    ngOnInit() {}

    public onAszfClick(): void {
        this.router.navigateByUrl('/aszf');
    }

    public openUrl(url: string): void {
        window.open(url, '_blank');
    }
}
