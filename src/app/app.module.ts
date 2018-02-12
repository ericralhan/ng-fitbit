import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CalibrationComponent } from './calibration/calibration.component';
import { HomeComponent } from './home/home.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { HomeService } from './services/home.service';

@NgModule({
  declarations: [
    AppComponent,
    CalibrationComponent,
    HomeComponent,
    BasicFormComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
