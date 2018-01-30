import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CurrentNightfallComponent } from './current-nightfall/current-nightfall.component';

const routes: Routes = [
  { path: '', redirectTo: '/currentNightfall', pathMatch: 'full' },
  { path: 'currentNightfall', component: CurrentNightfallComponent },
  { path: '**', component: CurrentNightfallComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
