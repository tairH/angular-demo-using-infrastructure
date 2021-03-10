import { Component, OnInit } from '@angular/core';
import { Step, WizardDataService } from 'moh-package';
import { WizardStep } from 'projects/moh-angular-lib/src/public_api';
@Component({
  selector: 'moh-wizard-v2',
  templateUrl: './wizard-v2.component.html',
  styleUrls: ['./wizard-v2.component.scss']
})
export class WizardV2Component implements OnInit {

  steps: Step[];

  constructor(private wizardDataService:WizardDataService) {
    this.steps = [
      { title: 'פרטים אישיים', path: 'personal', icon: 'person' },
      { title: 'עבודה', path: 'work', icon: 'work' },
      //{ title: 'עבודה', path: 'work', icon: 'work' },
      //{ title: 'עבודה', path: 'work', icon: 'work' },
      //{ title: 'עבודה', path: 'work', icon: 'work' },
      //{ title: 'עבודה', path: 'work', icon: 'work' },
      //{ title: 'עבודה', path: 'work', icon: 'work' },
      //{ title: 'עבודה', path: 'work', icon: 'work' },
      //{ title: 'עבודה', path: 'work', icon: 'work' },
      //{ title: 'עבודה', path: 'work', icon: 'work' },
      //{ title: 'עבודה', path: 'work', icon: 'work' },
      //{ title: 'עבודה', path: 'work', icon: 'work' },
      //{ title: 'עבודה', path: 'work', icon: 'work' },
      //{ title: 'עבודה', path: 'work', icon: 'work' },
      //{ title: 'עבודה', path: 'work', icon: 'work' },
      //{ title: 'עבודה', path: 'work', icon: 'work' },
      //{ title: 'עבודה', path: 'work', icon: 'work' },
      //{ title: 'עבודה', path: 'work', icon: 'work' },
      { title: 'כתובת', path: 'address', icon: 'home' },
      //{ title: 'Test', path: 'address2', icon: 'person' },
      //{ title: 'Test', path: 'address3', icon: 'work' },
      //{ title: 'Test', path: 'address4', icon: 'home' },
      //{ title: 'Test', path: 'address5', icon: 'person' },
      //{ title: 'Test', path: 'address6', icon: 'work' },
      //{ title: 'Test', path: 'address7', icon: 'home' },
      { title: 'סיום', path: 'result', icon: 'send' }
    ];
  }

  ngOnInit() { }

  submitWizard(formData) {
    console.log('submit wizard', formData);
  }


}
