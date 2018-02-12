import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title = 'Fitbits Calibration';

  constructor(
    private router: Router,
    private homeService: HomeService
  ) { }

  ngOnInit() {
  }

  public onLaunchCalibrate(uX: string, uY: string) {
    this.homeService.setUpperRightCoords(uX, uY);
    this.router.navigateByUrl('calibrate');
  }
}
