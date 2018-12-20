import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';

import { CommonModule } from '@angular/common';



@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        NavbarComponent
    ],
    exports: [
        NavbarComponent
    ]
})

export class SharedModule { }
