import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective {

  allowedRoles: string[];
  permissions = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) { }


  @Input()
  set appPermission(allowedRoles: string[]) {
    this.allowedRoles = allowedRoles;
    if (!this.allowedRoles || this.allowedRoles.length === 0) {
      this.viewContainer.clear();
      return;
    }

    let loginUser = JSON.parse(sessionStorage.getItem('loginUser'));
    if (loginUser !== null) {

      const allowed: boolean = loginUser.permissions.filter(role => this.allowedRoles.includes(role)).length > 0;

      if (allowed) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    }

  }
}
