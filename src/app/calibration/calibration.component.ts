import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';
import { CalibrationService } from '../services/calibration.service';
import { Trainee } from '../shared/trainee';

@Component({
  selector: 'app-calibration',
  templateUrl: './calibration.component.html',
  styleUrls: ['./calibration.component.css']
})
export class CalibrationComponent implements OnInit {

  public upper_x = this.homeService.upper_x;
  public upper_y = this.homeService.upper_y;
  public trainees = this.homeService.trainees;

  constructor(
    private router: Router,
    private homeService: HomeService,
    private calibrationService: CalibrationService,
  ) { }

  ngOnInit() {
  }

  public onTurnLeft(trainee: Trainee) {
    trainee = this.calibrationService.turnLeft(trainee);
  }

  public onTurnRight(trainee: Trainee) {
    trainee = this.calibrationService.turnRight(trainee);
  }

  public onMoveForward(trainee: Trainee) {
    trainee = this.calibrationService.moveForward(trainee);
  }

  public onNavigateToHome() {
    this.router.navigateByUrl('');
  }

  public onBulkCommandsAction(trainee: Trainee, bulkCommands: string) {
    this.calibrationService.processBulkCommands(trainee, bulkCommands);
  }
}
