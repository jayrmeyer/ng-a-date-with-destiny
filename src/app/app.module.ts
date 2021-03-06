import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatAccordion,
  MatExpansionPanel
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { PublicMilestonesComponent } from './public-milestones/public-milestones.component';
import { AppRoutingModule } from './app-routing.module';
import { BungieService } from './services/bungie.service';
import { DestinyCacheService } from './services/destiny-cache.service';
import { ValuesPipe } from './pipes/values.pipe';
import { ParseService } from './services/parse.service';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { LoggedInUserService } from './services/logged-in-user.service';
import { CharactersComponent } from './characters/characters.component';
import { InventoryComponent } from './inventory/inventory.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicMilestonesComponent,
    ValuesPipe,
    HomeComponent,
    AuthComponent,
    UserInfoComponent,
    CharactersComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [BungieService, DestinyCacheService, ParseService, AuthService, LoggedInUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
