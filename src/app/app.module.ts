import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CalibrationComponent } from './calibration/calibration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HomeService } from './services/home.service';
import { CalibrationService } from './services/calibration.service';

@NgModule({
  declarations: [
    AppComponent,
    CalibrationComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HomeService,
    CalibrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
