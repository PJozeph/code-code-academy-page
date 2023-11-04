import { Component } from '@angular/core';
import { Testimonial } from './modal/testimonial.modal';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    testimonials: Testimonial[] = [
        {
            name: 'Major Viktor',
            testimonial:
                'József kiváló szakmai tudással, és mindig gyors és pontos válaszokat nyújt a felmerülő kérdéseimre. Ugyanakkor rendkívül türelmes velem, ahogy a saját tempómban fejlődök. Sosem kritizál fájdalmasan, helyette konstruktív módon hívja fel a figyelmem a hibáimra, lehetővé téve számomra a tanulást és fejlődést. Rugalmasan alkalmazkodik a terveimhez, miközben sosem veszíti szem elől a hosszú távú célokat. Hálás vagyok neki minden odaadásáért és energiájáért, amit a fejlődésembe fektet, még az előre megszabott találkozóinkon kívül is.',
            image: '../assets/profile_pictures/viktor.png',
        },
        {
            name: 'Brudás Kata',
            testimonial:
                'Joci szakértelme, világos és érthető magyarázatai sokat segítenek a különböző fogalmak és logikák megértésében. Türelmes, ha szükséges többször átbeszéljük újra és újra a felmerülő kérdéseket, több oldalról is képes megvilágítani azokat. Rugalmas időbeosztással tanulhatok nála, a problémáimmal a mentoridőn kívül is kereshetem, kézséggel megválaszolja azokat. Ha olyan mentort keresel, aki elkötelezetetten, mélyreható szakértelemmel és türelmesen visz végig az úton, nem fogsz csalódni.',
            image: '../assets/profile_pictures/kata.jpg',
        },
    ];

    constructor() {}
}
