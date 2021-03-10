import { Component, OnInit, Injector } from '@angular/core';
import { WizardStep, mohValidators, WizardDataService, FreeTextOption } from 'moh-package';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'moh-work-v2',
  templateUrl: './work-v2.component.html',
  styleUrls: ['./work-v2.component.scss']
})
export class WorkV2Component extends WizardStep implements OnInit {
  firstName: string;
  title = 'מה אתה עושה?';
  workType: string;
  workList: any[] = [{ code: 1, text: 'Design' }, { code: 2, text: 'Code' }, { code: 3, text: 'Deploy' }, { code: 4, text: 'Another' }];

  constructor(private fb: FormBuilder, private wizardDataService: WizardDataService, injector: Injector) {
    super(injector);
    this.stepFormGroup = this.fb.group({
      work: [new FreeTextOption(2,''), mohValidators.required()],
      aa: []
    });
  }

  ngOnInit() {

    this.firstName = (this.wizardDataService.getFormData().personal || {}).firstName;
    console.log("this.wizardDataService.getFormData()", this.wizardDataService.getFormData());
    console.log("this.stepFormGroup.value", this.stepFormGroup.value);
  }
}
