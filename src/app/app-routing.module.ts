import { NgModule } from '@angular/core';
import { RouteModule, Routes } from '@angular/router';

import { CronoComponent} from './components/crono/crono.component';

const appRoutes: Routes = [
    {
        path: '',
        component: CronoComponent
    },
    {
        path: 'crono', 
        component: CronoComponent
    },
    {
        path: '**',
        component: CronoComponent
    }
];

@NgModule({
  imports: [
      RouteModule.forRoot(appRoutes)
  ],
    exports: [RouteModule]
})
export class AppRoutingModule { }