import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RazasListComponent } from './entities/razas/razas-list/razas-list.component';
import { RazasDetailComponent } from './entities/razas/razas-detail/razas-detail.component';
import { RazaItemComponent } from './entities/razas/raza-item/raza-item.component';
import { FaccionPipe } from './shared/pipes/faccion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RazasListComponent,
    RazasDetailComponent,
    RazaItemComponent,
    FaccionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
