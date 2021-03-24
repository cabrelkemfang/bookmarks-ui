import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  newSesionForm: FormGroup
  mouseover: boolean;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.sessionForm();
  }

  sessionForm() {
    this.newSesionForm = this.fb.group({
      name: ['', Validators.required],
      presenter: ['', Validators.required],
      duration: ['', Validators.required],
      level: ['', Validators.required],
      abstract: ['', Validators.required]
    })
  }

  getFormControl() {
    return this.newSesionForm.controls;
  }

  validatSessionName() {
    return this.getFormControl().name.invalid && (this.getFormControl().name.touched || this.mouseover);
  }

  validatPresenter() {
    return this.getFormControl().presenter.invalid && (this.getFormControl().presenter.touched || this.mouseover);
  }

  validatDuration() {
    return this.getFormControl().duration.invalid && (this.getFormControl().duration.touched || this.mouseover);

  }

  validatLevel() {
    return this.getFormControl().level.invalid && (this.getFormControl().level.touched || this.mouseover);
  }

  validatAbstract() {
    return this.getFormControl().abstract.invalid && (this.getFormControl().abstract.touched || this.mouseover);
  }

  saveSession(formValue) {
    console.log(formValue);
  }
}
