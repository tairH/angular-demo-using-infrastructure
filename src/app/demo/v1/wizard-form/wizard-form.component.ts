import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';

import { Step, DataService, BaseAbstractControl } from 'moh-package';

/**
 * @ignore
 */
@Component({
  selector: 'moh-wizard-form',
  templateUrl: './wizard-form.component.html',
  styleUrls: ['./wizard-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WizardFormComponent implements OnInit {
  steps: Step[];
  resetOnSubmit: boolean = true;

  constructor(private dataService: DataService) {
    this.steps = [
      { title: 'הקדמה ופרטים אישיים', path: 'personal', icon: 'assignment' },
      { title: 'תעסוקה ולימודים', path: 'work', icon: 'work_outline' },
      { title: 'חברה ואיכות חיים', path: 'address', icon: 'face' },
      //{ title: 'מטרות, יעדים ושינויים', path: 'purpose', icon: 'multiline_chart' },
      //{ title: 'הערכת יכולות ותמיכה', path: 'support', icon: 'pan_tool' },
      { title: 'סיום', path: 'result', icon: 'done' }
    ];
  }

  ngOnInit() {
  }

  submitWizard(formData) {
    console.log('submit wizard', formData);
    this.resetOnSubmit = false;
  }

  stepChanged(stepComponent) {
    console.log('active step component', stepComponent);
  }

  nextStepEvent(stepFormData) {
    console.log('nextStepEvent', stepFormData);
  }

}
