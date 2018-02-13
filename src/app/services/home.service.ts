import { Injectable } from '@angular/core';
import { Trainee } from '../shared/trainee';

@Injectable()
export class HomeService {

  upper_x: number;
  upper_y: number;
  trainees: Array<Trainee>;

  constructor() { }

  public setUpperRightCoords(uX: number, uY: number) {
    this.upper_x = uX;
    this.upper_y = uY;
  }

  public setTrainees(trainees: Array<any>) {
    this.trainees = trainees;
  }

}
