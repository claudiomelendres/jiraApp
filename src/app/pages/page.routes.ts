import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorklogComponent } from './worklog/worklog.component';
import { ChartsComponent } from './charts/charts.component';
import { LoginGuardGuard } from '../services/service.index';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuardGuard],
        children: [
             { path: 'home', component: HomeComponent },
             { path: 'about', component: AboutComponent },
             { path: 'worklog', component: WorklogComponent },
             { path: 'charts', component: ChartsComponent }
            //  { path: '', redirectTo: '/about', pathMatch: 'full' },

        ]
      }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
