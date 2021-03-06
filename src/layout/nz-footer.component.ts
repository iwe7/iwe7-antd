import { Component } from '@angular/core';

@Component({
  selector: 'nz-footer',
  preserveWhitespaces: false,
  template: `
    <ng-content></ng-content>
  `,
  styles: [
    `:host {
      display: block;
    }`
  ],
  host: {
    '[class.ant-layout-footer]': 'true'
  }
})
export class NzFooterComponent {}
