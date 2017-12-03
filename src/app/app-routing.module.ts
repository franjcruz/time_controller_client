import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CronoComponent} from './crono/crono.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'crono', component: CronoComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(appRoutes)
  ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
