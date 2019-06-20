import { RouterModule, Routes } from '@angular/router';
import { PaginasComponent } from './paginas/paginas.component';
import { NoencontradoComponent } from './compartido/noencontrado/noencontrado.component';

const appRoutes: Routes = [
    {
        path: '',
        component: PaginasComponent
    },
    { path: '**', component: NoencontradoComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );