import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CARDINAL_POSITIONS } from '../app-constants';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-calibration',
  templateUrl: './calibration.component.html',
  styleUrls: ['./calibration.component.css']
})
export class CalibrationComponent implements OnInit {

  private cardinal_positions = CARDINAL_POSITIONS;
  public upper_x = this.homeService.upper_x;
  public upper_y = this.homeService.upper_y;
  public trainees = this.homeService.trainees;

  constructor(
    private router: Router,
    private homeService: HomeService
  ) { }

  ngOnInit() {
  }

  onNavigateToHome() {
    this.router.navigateByUrl('');
  }
}
