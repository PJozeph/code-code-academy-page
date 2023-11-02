import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-news-letter',
    templateUrl: './news-letter.component.html',
    styleUrls: ['./news-letter.component.scss'],
})
export class NewsLetterComponent {
    formBuilder: FormBuilder = inject(FormBuilder);
    formGroup = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
    });

    public onSubscribeClick(): void {
        console.log(this.formGroup.value);
        if (this.formGroup.valid) {
            alert('Sikeres feliratkozás!');
        } else {
            alert('Sikertelen feliratkozás!');
        }
    }
}
