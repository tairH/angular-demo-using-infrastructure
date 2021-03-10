import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { WizardStep, mohValidators, WizardDataService } from 'moh-package';

import * as _ from "lodash";

/**
 * @ignore
 */
@Component({
  selector: 'mt-wizard-work'
  , templateUrl: './work.component.html'
})

export class WorkComponent extends WizardStep implements OnInit {
  firstName: string;
  title = 'מה אתה עושה?';
  workType: string;
  workList: any[] = [{ code: 1, text: 'Design' }, { code: 2, text: 'Code' }, { code: 3, text: 'Deploy' }];

  constructor(private fb: FormBuilder, private wizardDataService: WizardDataService, injector: Injector) {
    super(injector);
    this.stepFormGroup = this.fb.group({
      work: [1, mohValidators.required()],
      aa:[]
    });
  }

  ngOnInit() {

    this.firstName = (this.wizardDataService.getFormData().personal || {}).firstName;
    console.log("this.wizardDataService.getFormData()", this.wizardDataService.getFormData());
    console.log("this.stepFormGroup.value",this.stepFormGroup.value);
  }
}
