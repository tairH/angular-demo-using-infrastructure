import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { mohValidators, WizardStep, UploaderSettings, TelephoneService, ToggleOption, WizardDataService, DataService } from 'moh-package';

@Component({
  selector: 'moh-personal-v2',
  templateUrl: './personal-v2.component.html',
  styleUrls: ['./personal-v2.component.scss']
})
export class PersonalV2Component extends WizardStep implements OnInit {

  title = 'ספר לנו על עצמך.';
  slideToggleOptions: ToggleOption[] = [new ToggleOption('זכר', 1), new ToggleOption('נקבה', 2), new ToggleOption('אחר', 3)];
  selectOptions: Observable<any[]>;
  items: any;
  settings: UploaderSettings = new UploaderSettings();

  toggleDisabled: boolean = false;


  constructor(private fb: FormBuilder, private wizardDataService: WizardDataService, private telephoneService: TelephoneService, injector: Injector) {
    super(injector);

    this.stepFormGroup = this.fb.group({
      firstName: ['', mohValidators.required()],
      lastName: [],
      email: ['', mohValidators.email()],
      toggle: [],
      select: [4],
      tel: [],//{ phoneNumber: '', prefix: { code: '', value: '' } }
      items: this.fb.array([]),
      checkBox: ['', mohValidators.requiredTrue()],
      uploader:[],
    });

    this.selectOptions = this.telephoneService.getPhonePrefix();

    let itemsData = (this.wizardDataService.getFormData().personal || {}).items || [] as any[];
    itemsData.forEach(item => this.addItem());



  }

  ngOnInit(): void {
    this.stepFormGroup.controls.firstName.valueChanges.subscribe(val => {
      if (val == '1') {
        this.toggleDisabled = false;
      }
      else {
        //this.toggleDisabled = true;

      }

    })
    this.settings.allowMimeTypes = ['image/png', 'image/gif', 'video/mp4', 'image/jpeg', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/x-bzip'];
    this.settings.maxFileSize = 1 * 1024 * 1024;
    this.settings.queueLimit = 5;
    this.settings.isMultiple = true;
    this.settings.hasDescription = true;
    this.settings.queueMinLimit = 0;
    this.settings.isRequired = false;
    this.settings.isDescriptionRequired = false;
    //setInterval(() => {
    //  this.toggleDisabled = !this.toggleDisabled;
    //  //this.demoForm.controls.toggle.disable();
    //}, 4000)
  }

  get itemsFormArray() { return <FormArray>this.stepFormGroup.get('items'); }

  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      age: ''
    });
  }

  addItem(): void {
    this.items = this.stepFormGroup.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  getDisplayFn() {
    return (option) => {
      return option.text + '!';
    }
  }
}
