import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PublicMilestonesComponent } from './public-milestones/public-milestones.component';
import { AuthComponent } from './auth/auth.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'publicMilestones', component: PublicMilestonesComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'bungie_user/:memberId', component: UserInfoComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
