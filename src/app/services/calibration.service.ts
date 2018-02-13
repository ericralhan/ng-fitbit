import { Injectable } from '@angular/core';
import { HomeService } from './home.service';
import { Trainee } from '../shared/trainee';

@Injectable()
export class CalibrationService {

  constructor(
    private homeService: HomeService
  ) { }

  /**
   * Function to navigate left
   * @param  {Trainee} trainee
   * @returns Trainee
   */
  public turnLeft(trainee: Trainee): Trainee {
    switch (trainee.tr_cp) {
      case 'N':
        trainee.tr_cp = 'W';
        break;
      case 'S':
        trainee.tr_cp = 'E';
        break;
      case 'E':
        trainee.tr_cp = 'N';
        break;
      case 'W':
        trainee.tr_cp = 'S';
        break;
    }
    return trainee;
  }
  /**
   * Function to navigate right
   * @param  {Trainee} trainee
   * @returns Trainee
   */
  public turnRight(trainee: Trainee): Trainee {
    switch (trainee.tr_cp) {
      case 'N':
        trainee.tr_cp = 'E';
        break;
      case 'S':
        trainee.tr_cp = 'W';
        break;
      case 'E':
        trainee.tr_cp = 'S';
        break;
      case 'W':
        trainee.tr_cp = 'N';
        break;
    }
    return trainee;
  }

  /**
   * Function to moveForward
   * @param  {Trainee} trainee
   * @returns Trainee
   */
  public moveForward(trainee: Trainee): Trainee {
    switch (trainee.tr_cp) {
      case 'N':
        trainee.tr_y++;
        break;
      case 'S':
        trainee.tr_y--;
        break;
      case 'E':
        trainee.tr_x++;
        break;
      case 'W':
        trainee.tr_x--;
        break;
    }

    // these checks are needed to keep trainee in the graph
    if (trainee.tr_x < 0) {
      trainee.tr_x = 0;
    }
    if (trainee.tr_y < 0) {
      trainee.tr_y = 0;
    }
    if (trainee.tr_x > this.homeService.upper_x) {
      trainee.tr_x = this.homeService.upper_x;
    }
    if (trainee.tr_y > this.homeService.upper_y) {
      trainee.tr_y = this.homeService.upper_y;
    }

    return trainee;
  }

}
