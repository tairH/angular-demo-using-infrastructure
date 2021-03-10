import { Component, OnInit, Injector } from '@angular/core';
import { WizardStep, mohValidators } from 'moh-package';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'moh-result-v2',
  templateUrl: './result-v2.component.html',
  styleUrls: ['./result-v2.component.scss']
})
export class ResultV2Component extends WizardStep implements OnInit {

  constructor(injector: Injector, private fb: FormBuilder) {
    super(injector);

    this.stepFormGroup = this.fb.group({
      signature: ['', mohValidators.required()]
    });
  }

  ngOnInit() {
  }

}
