import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginResponse } from '../core/model/login-response';
import { NotificationService } from '../core/service/notification.service';
import { DataResponse } from '../core/model/response';
import { LoginService } from '../core/service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [

    trigger('explainerAnim', [
      transition('* => *', [
        query('.col', style({ opacity: 0, transform: 'translateY(-40px)' })),

        query('.col', stagger('500ms', [
          animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
        ])),

        query('.col', [
          animate(1000, style('*'))
        ])

      ])
    ])
  ]
})

export class LoginComponent implements OnInit {
  hide = true;
  mouseHover: boolean;
  loginForm: FormGroup
  signInForm: FormGroup;
  signupLogin: boolean;
  loginLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private notificationService: NotificationService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.createLoginForm();
    this.createSignInForm();
  }


  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }


  createSignInForm() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      github: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['']
    });
  }


  onLogin(value) {
    this.loginLoading = true;
    this.loginService.login(value).subscribe((data: LoginResponse) => {
      localStorage.setItem('token', data.access_token);
      this.notificationService.success(":: Login Successfully")
      this.getUserInfo();
      this.loginLoading = false;
      this.router.navigate(['/bookmarks'])
    }, (error => {
      this.loginLoading = false;
    }));
  }


  onSignUp(value) {
    this.signupLogin = true;
    this.loginService.signup(value).subscribe((data: DataResponse) => {
      this.notificationService.success(data.message);
      this.signInForm.reset();
      this.signupLogin = false;
    }, (error => {
      this.signupLogin = false;
    }));
  }

  getUserInfo() {
    this.loginService.getUserInfo().subscribe((response: DataResponse) => {
      localStorage.setItem('loginUser', JSON.stringify(response.data))

    }, (error => {
      this.loginLoading = false;
    }));
  }

  onClear() {
    this.signInForm.reset();
    this.initailizer();
  }

  initailizer() {
    this.signInForm.setValue({
      email: '',
      name: '',
      github: '',
      password: '',
      confirmPassword: ''
    })
  }


}
