import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalibrationComponent } from './calibration/calibration.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'calibrate',
    component: CalibrationComponent
  },
  {
    path: 'basicform',
    component: BasicFormComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
