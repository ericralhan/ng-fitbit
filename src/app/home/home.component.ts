import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';
import { Trainee } from '../shared/trainee';
import { CARDINAL_POSITIONS } from '../app-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title = 'Fitbits Calibration';
  public trainees: Array<Trainee> = new Array<Trainee>();
  public cardinal_positions = CARDINAL_POSITIONS;

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
    this.validateTrainees();
    this.homeService.setTrainees(this.trainees);
    this.router.navigateByUrl('calibrate');
  }
  /**
   * If trainee x,y are greater than upper x,y,
   * then this function will aassign x and y coords
   * to max upper x,y
   */
  private validateTrainees() {
    this.trainees.forEach(element => {
      if (element.tr_x > this.homeService.upper_x) {
        element.tr_x = this.homeService.upper_x;
      }
      if (element.tr_y > this.homeService.upper_y) {
        element.tr_y = this.homeService.upper_y;
      }
    });
  }
}
