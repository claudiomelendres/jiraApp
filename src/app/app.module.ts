import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { ServiceModule } from './services/service.module';


// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PagesModule,
    FormsModule,
    ServiceModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
