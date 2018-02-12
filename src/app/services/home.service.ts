import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  upper_x_coord: string;
  upper_y_coord: string;

  constructor() { }

  public setUpperRightCoords(uX: string, uY: string) {
    this.upper_x_coord = uX;
    this.upper_y_coord = uY;
  }

}
