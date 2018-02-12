import { Component, OnInit, Host } from '@angular/core';

@Component({
  templateUrl: './basic-form.component.html'
})
export class BasicFormComponent implements OnInit {
  form: any;
  powers: string[];
  submitted = false;

  constructor() { }

  ngOnInit() {
    this.powers = ['Really Smart', 'Turbulent Breeze',
                'Super Hot', 'Weather Changer'];
  }

  onSubmit(form: any)  {
    this.submitted = true;
    this.form = form;
  }
}
