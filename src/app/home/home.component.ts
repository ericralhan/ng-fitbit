import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';
import { Trainee } from '../shared/trainee';
import { ViewChild } from '@angular/core/src/metadata/di';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title = 'Fitbits Calibration';
  public trainees: Array<Trainee> = new Array<Trainee>();

  constructor(
    private router: Router,
    private homeService: HomeService
  ) { }

  ngOnInit() {
  }

  public onAddTrainee(tr_name: string, tr_x: number, tr_y: number, tr_cp: string) {
    const trainee = new Trainee(tr_name, tr_x, tr_y, tr_cp);
    this.trainees.push(trainee);
  }

  public onLaunchCalibrate(uX: number, uY: number) {
    this.homeService.setUpperRightCoords(uX, uY);
    this.homeService.setTrainees(this.trainees);
    this.router.navigateByUrl('calibrate');
  }

}
