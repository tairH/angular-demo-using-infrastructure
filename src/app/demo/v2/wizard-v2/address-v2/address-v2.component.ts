import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { mohValidators, WizardStep } from 'moh-package';


@Component({
  selector: 'moh-address-v2',
  templateUrl: './address-v2.component.html',
  styleUrls: ['./address-v2.component.scss']
})
export class AddressV2Component extends WizardStep implements OnInit {

  title = 'איפה אתה גר?';

  constructor(private fb: FormBuilder, injector: Injector) {
    super(injector);

    this.stepFormGroup = this.fb.group({
      street: ['', mohValidators.required()],
      city: ['', mohValidators.required()],
      state: ['', mohValidators.required()],
      zip: ['', mohValidators.required()]
    });
  }

  ngOnInit() { }
}
