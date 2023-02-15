import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import {MenuComponent} from "./modules/menu/menu/menu.component";
import {ContactComponent} from "./modules/contact/contact.component";
import { MenuSushiComponent } from './modules/menu/menu-sushi/menu-sushi.component';
import { MenuPokeComponent } from './modules/menu/menu-poke/menu-poke.component';
import { PageContactComponent } from './modules/contact/page-contact/page-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    MenuComponent,
    ContactComponent,
    MenuSushiComponent,
    MenuPokeComponent,
    PageContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
