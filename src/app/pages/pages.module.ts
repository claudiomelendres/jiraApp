import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule} from 'ng2-charts';

import { PAGES_ROUTES } from './page.routes';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorklogComponent } from './worklog/worklog.component';
import { IssueComponent } from './issue/issue.component';
import { ChartsComponent } from './charts/charts.component';



@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        AboutComponent,
        WorklogComponent,
        IssueComponent,
        ChartsComponent
    ],
    exports: [
        PagesComponent,
        HomeComponent,
        AboutComponent,
        WorklogComponent,
        IssueComponent,
        ChartsComponent
    ],
    imports: [
        PAGES_ROUTES,
        FormsModule,
        BrowserModule,
        SharedModule,
        ChartsModule
    ],
    bootstrap: [PagesComponent]
})

export class PagesModule { }
