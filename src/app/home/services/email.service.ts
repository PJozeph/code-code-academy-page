import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EmailRequest } from '../modal/email-request-modal';

@Injectable({
    providedIn: 'root',
})
export class EmailService {
    private httpClient: HttpClient = inject(HttpClient);

    send(message: EmailRequest) {
        return this.httpClient.post('https://contact-form-service-tm2avac4aa-uc.a.run.app/email', message);
    }
}
