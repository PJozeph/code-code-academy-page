import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AszfComponent } from './components/aszf/aszf.component';
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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomePageRoutingModule {}
