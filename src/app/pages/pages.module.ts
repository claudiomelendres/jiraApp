import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';


import { PAGES_ROUTES } from './page.routes';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorklogComponent } from './worklog/worklog.component';
import { ChartsComponent } from './charts/charts.component';



@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        AboutComponent,
        WorklogComponent,
        ChartsComponent
    ],
    exports: [
        PagesComponent,
        HomeComponent,
        AboutComponent,
        WorklogComponent,
        ChartsComponent
    ],
    imports: [
        PAGES_ROUTES,
        FormsModule,
        SharedModule
    ]
})

export class PagesModule { }
