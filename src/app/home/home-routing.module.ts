import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AszfComponent } from './components/aszf/aszf.component';
import { DetailsComponent } from './components/details/details.component';
import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
    },
    {
        path: 'aszf',
        component: AszfComponent,
    },
    {
        path: 'details/:id',
        component: DetailsComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomePageRoutingModule {}
