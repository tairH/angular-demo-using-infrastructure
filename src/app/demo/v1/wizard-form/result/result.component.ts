import { Component, OnInit, Injector }   from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { WizardStep, mohValidators} from 'moh-package';


/**
 * @ignore
 */
@Component ({
    selector:     'mt-wizard-result'
    ,templateUrl: './result.component.html'
})

export class ResultComponent extends WizardStep implements OnInit {
    title = 'סיום!';
    
    constructor(private fb: FormBuilder, injector: Injector) {
      super(injector);
      this.stepFormGroup = this.fb.group({
        signature: ['', mohValidators.required()]
      });
    }

    ngOnInit() {}
}
