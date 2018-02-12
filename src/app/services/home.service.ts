import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  upper_x: string;
  upper_y: string;
  trainees: Array<any>;

  constructor() { }

  public setUpperRightCoords(uX: string, uY: string) {
    this.upper_x = uX;
    this.upper_y = uY;
  }

  public setTrainees(trainees: Array<any>) {
    this.trainees = trainees;
  }

}
