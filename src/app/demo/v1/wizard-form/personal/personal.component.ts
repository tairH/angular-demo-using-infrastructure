import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl, FormControl } from '@angular/forms';
import { of, BehaviorSubject, Observable } from 'rxjs';

import {
  WizardStep
  , mohValidators
  , ToggleOption
  , WizardDataService, DataService, ModalService
  , TelephoneService
} from 'moh-package';


/**
 * @ignore
 */
@Component({
  selector: 'mt-wizard-personal'
  , templateUrl: './personal.component.html'
})

export class PersonalComponent extends WizardStep implements OnInit {

  title = 'ספר לנו על עצמך.';
  slideToggleOptions: ToggleOption[] = [new ToggleOption('זכר', 1), new ToggleOption('נקבה', 2), new ToggleOption('אחר', 3)];
  selectOptions: Observable<any[]>;
  items: any;
  absControl: AbstractControl;
  toggleDisabled: boolean = true;
  canNextSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private fb: FormBuilder, private wizardDataService: WizardDataService, private telephoneService: TelephoneService, injector: Injector,
    private modelService: ModalService) {
    super(injector);

    this.stepFormGroup = this.fb.group({
      firstName: ['', mohValidators.required()],
      lastName: ['', mohValidators.required()],
      email: ['', [mohValidators.required(), mohValidators.email()]],
      toggle: [],
      select: [4],
      tel: [{ phoneNumber: '', prefix: { code: '', value: '' } }],
      items: this.fb.array([]),
      checkBox: ['', mohValidators.requiredTrue()],
      formArray: new FormArray([this.getArrayItem()]),
    });

    this.selectOptions = this.telephoneService.getPhonePrefix();
    this.absControl = this.getArrayItem();
    let itemsData = (this.wizardDataService.getFormData().personal || {}).items || [] as any[];
    itemsData.forEach(item => this.addItem());



  }

  ngOnInit(): void {
    this.stepFormGroup.controls.firstName.valueChanges.subscribe(val => {
      if (val == '1') {
        this.toggleDisabled = false;
      }
      else {
        this.toggleDisabled = true;

      }

    })

    //setInterval(() => {
    //  this.toggleDisabled = !this.toggleDisabled;
    //  //this.demoForm.controls.toggle.disable();
    //}, 4000)
  }

  getArrayItem(): AbstractControl {
    return new FormGroup({
      firstName: new FormControl('', [mohValidators.required()]),
      lastName: new FormControl('', [mohValidators.minLength(2)])
    })
  }


  canNext(): Observable<boolean> {
    this.modelService.confirmMsg('האם אתה רוצה להמשיך לטאב הבא?', 'בדיקת אפשרות מעבר').then((result) => {
      this.canNextSubject.next(true);
    });

    return this.canNextSubject.asObservable();
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
