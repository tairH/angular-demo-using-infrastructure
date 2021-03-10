import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';

import { UploaderSettings, ModalService, MessageType, MohTranslateService, IMenuItem } from 'moh-package';

import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
declare var require: any;

/**
 * @ignore
 */
@Component({
  selector: 'moh-master',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  settings: UploaderSettings = new UploaderSettings();
  fileDesc: string = "";
  form: FormGroup;
  isV1Active: boolean;

  menuItems: IMenuItem[];

  funcOnOK: () => void;

  constructor(private fb: FormBuilder, private modal: ModalService, private translate: MohTranslateService, private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationStart))
      // .subscribe((event: NavigationStart) => {
      .subscribe((event: any) => {
        if (event.url.includes('v1')) {
          this.isV1Active = false;
          require("style-loader!../../../moh-angular-lib/src/styles/styles.scss");
        }
        else {
          this.isV1Active = true;
          require("style-loader!../../../moh-angular-lib/src/styles/styles.v2.scss");
        }
      });
  }

  ngOnInit(): void {

    this.translate.setTitleKey('appTitle');

    this.menuItems = [{ title: 'ראשי', url: '/form' }, { title: 'wizard', url: '/wizard' }, { title: 'grid', url: '/grid' }]
  }

  onMyErrorItem(event: any) {
    console.log(event);
  }

  onMycomplete(event: any) {
    console.log("all complete");
  }

  alertDet() {
    if (this.form.dirty && this.form.valid) {
      alert(`Name: ${this.form.value.uploader}`);
      console.log(this.form.value.uploader);
      alert(this.fileDesc);
    }    
  }

  sendReq() {
    console.log('sendReq func');
  }

  navigateToV1() {
    window.location.href = '/v1';
  }

  navigateToV2() {
    window.location.href = '/v2';
  }
}
