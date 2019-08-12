import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';


const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'artista', component: ArtistaComponent },
    { path: 'search', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
    // { path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
