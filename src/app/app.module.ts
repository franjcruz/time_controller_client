import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { CronoComponent } from './components/crono/crono.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    declarations: [
        AppComponent,
        CronoComponent
    ],
    imports: [
        BrowserModule,
//        routing,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
