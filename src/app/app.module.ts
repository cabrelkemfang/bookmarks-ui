import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-router';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpInterceptorService } from './core/interceptor/http-interceptor.service';
import { ErrorHandlerInterceptorService } from './core/interceptor/error-handler-interceptor.service';
import { ShareModule } from './shared/sharemodule.module';
import { PermissionDirective } from './shared/directive/permissions.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    ShareModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
