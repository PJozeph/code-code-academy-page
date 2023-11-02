import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ServicesComponent } from './components/services/services.component';
import { ServicesCardComponent } from './components/services-card/services-card.component';
import { TeacherCardComponent } from './components/teacher-card/teacher-card.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutUsCardComponent } from './components/about-us-card/about-us-card.component';
import { NewsLetterComponent } from './components/news-letter/news-letter.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AszfComponent } from './components/aszf/aszf.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, ReactiveFormsModule, RouterModule],
    declarations: [
        HomePage,
        TestimonialCardComponent,
        IntroductionComponent,
        ServicesComponent,
        ServicesCardComponent,
        TeacherCardComponent,
        TeachersComponent,
        AboutUsComponent,
        AboutUsCardComponent,
        NewsLetterComponent,
        FooterComponent,
        HeaderComponent,
        AszfComponent,
    ],
    exports: [ServicesComponent],
})
export class HomePageModule {}
