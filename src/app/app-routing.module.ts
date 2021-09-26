import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ItemComponent } from './pages/item/item.component';
import { PerrosComponent } from './pages/perros/perros.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';

const routes: Routes = [
  { path: 'home', component: PortafolioComponent},
  { path: 'about', component: AboutComponent},
  { path: 'item', component: ItemComponent},
  { path: 'perros', component: PerrosComponent},
  { path: 'detail/:id', component: DetailComponent},
  { path: "**", pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
