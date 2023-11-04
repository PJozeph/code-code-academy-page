import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { EmailRequest } from '../../modal/email-request-modal';
import { EmailService } from '../../services/email.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
    formBuilder: FormBuilder = inject(FormBuilder);
    emailService: EmailService = inject(EmailService);

    activatedRoute: any = inject(ActivatedRoute);
    public selectedService: string = '';

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

    formGroup = this.formBuilder.nonNullable.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required],
    });

    constructor() {}

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.selectedService = params['id'];
        });
    }

    public onSubmit() {
        const emailRequest: EmailRequest = this.formGroup.getRawValue();
        emailRequest.subject = this.selectedService;
        this.emailService.send(emailRequest).subscribe(() => {
            this.formGroup.reset();
        });
    }
}
