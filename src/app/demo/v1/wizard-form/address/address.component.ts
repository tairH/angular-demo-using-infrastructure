import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { mohValidators, WizardStep } from 'moh-package';

/**
 * @ignore
 */
@Component({
  selector: 'mt-wizard-address',
  templateUrl: './address.component.html'
})

export class AddressComponent extends WizardStep implements OnInit {
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

