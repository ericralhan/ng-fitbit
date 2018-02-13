import { Injectable } from '@angular/core';
import { Trainee } from '../shared/trainee';

@Injectable()
export class CalibrationService {

  constructor() { }

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
        trainee.tr_y += 1;
        break;
      case 'S':
        trainee.tr_y -= 1;
        break;
      case 'E':
        trainee.tr_x += 1;
        break;
      case 'W':
        trainee.tr_x -= 1;
        break;
    }
    return trainee;
  }
}
