import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './modules/contact/contact.component';
import { MenuPokeComponent } from './modules/menu/menu-poke/menu-poke.component';
import { MenuSushiComponent } from './modules/menu/menu-sushi/menu-sushi.component';
import { MenuComponent } from './modules/menu/menu/menu.component';

const routes: Routes = [
  {path: 'menu', component : MenuComponent, children : [
    {path : 'sushi', component : MenuSushiComponent},
    {path : 'poke', component : MenuPokeComponent}
  ]},
  {path: 'contact', component : ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
