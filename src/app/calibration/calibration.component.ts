import { Component, OnInit } from '@angular/core';
import { CARDINAL_POSITIONS } from '../app-constants';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-calibration',
  templateUrl: './calibration.component.html',
  styleUrls: ['./calibration.component.css']
})
export class CalibrationComponent implements OnInit {

  private cardinal_positions = CARDINAL_POSITIONS;
  public upper_x_coord = this.homeService.upper_x_coord;
  public upper_y_coord = this.homeService.upper_y_coord;


  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
  }
}
