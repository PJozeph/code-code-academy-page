import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
    formBuilder: FormBuilder = inject(FormBuilder);
    activatedRoute: any = inject(ActivatedRoute);
    public activeLayout: string = '';

    public courseSubjects: string[] = [
        'JS alapok',
        'TS alapok',
        'Components',
        'Angular CLI',
        'Components communication',
        'Dependency Injection',
        'Life cycle hooks',
        'Observable',
        'Integrate Ionic/Material',
        'Backend integration',
        'Pipes',
        'Modules',
        'Routing',
        'Lazy Loading',
        'Forms',
        'Standalone Components',
        'NgRx',
    ];

    formGroup = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required],
    });

    constructor() {}

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.activeLayout = params['id'];
        });
    }
}
