import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RazasDetailComponent } from './entities/razas/razas-detail/razas-detail.component';
import { RazasListComponent } from './entities/razas/razas-list/razas-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'razas', component: RazasListComponent },
  { path: 'razas/:idRaza', component: RazasDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
