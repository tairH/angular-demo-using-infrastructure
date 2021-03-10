import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { of as observableOf, Subject, BehaviorSubject, Observable } from 'rxjs';

import {
  mohValidators
  , AddressV2Module
  , ModalService, MessageType, DataService
  , UploaderSettings
  , ToggleOption
  , UmbracoDataService
  , Prefix
  , formControlInfo
} from 'moh-package';

export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}

/**
 * @ignore
 */
@Component({
  selector: 'moh-form-layout',
  templateUrl: './form-layout.component.html',
  styleUrls: ['./form-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FormLayoutComponent implements OnInit {
  demoForm: FormGroup;
  settings: UploaderSettings = new UploaderSettings();
  absControl: AbstractControl;

  houseNumberValidators: ValidatorFn[] = [mohValidators.required(), mohValidators.pattern(new RegExp("^[{א-ת} 0-9\"']*$"))];
  cityValidators: ValidatorFn[] = [mohValidators.required()];
  datePickerValidators: ValidatorFn[] = [mohValidators.maxLength(8)];
  maxDate: Date = new Date(2018, 6, 6);
  minDate: Date = new Date(2018, 3, 1);

  answareOptions: formControlInfo[] = [{ code: 9, textValue: 'כלל לא' }, { code: 2, textValue: 'במידה מועטה' }, { code: 3, textValue: 'במידה בינונית' }, { code: 4, textValue: 'במידה רבה' }, { code: 5, textValue: 'במידה רבה מאוד' }, { code: 6, textValue: 'לא רלוונטי' }];
  questions: formControlInfo[] = [{ code: 101, textValue: 'מצבך הכלכלי' },
  { code: 2, textValue: 'המצב התעסוקתי שלך' },
  //{ code: 202, textKey: 'cityId'},
  { code: 3, textValue: 'המגורים שלך', validation: [mohValidators.required()] },
  { code: 4, textValue: 'המצב החברתי שלך' },
  { code: 5, textValue: 'מצבך בתחום הזוגיות' },
  { code: 6, textValue: 'מערכת היחסים שלך עם ילדך' },
  { code: 7, textValue: 'הקשר שלך עם משפחת המוצא שלך (הורים/אחים)' },
  { code: 8, textValue: 'הפעילויות שלך בזמנך החופשי' },
  { code: 9, textValue: 'מצבך בתחום הלימודים' },
  { code: 10, textValue: 'מצבך הנפשי' },
  { code: 11, textValue: 'בריאותך הגופנית' }];

  rating: formControlInfo[] = [{ code: 1, textValue: 'כלל לא' }, { code: 2 }, { code: 3 }, { code: 4 }, { code: 5, textValue: 'במידה רבה מאוד' }];
  ratingNFOption: formControlInfo = { code: 9, textValue: 'לא רלונטי' };

  citiesList: Observable<any[]> = observableOf([
    { Code: 1, Description: 'טבריה' },
    { Code: "3000", Description: 'ירושלים' },
    { Code: 3, Description: 'עפולה' },
    { Code: 4, Description: 'תל אביב' }
  ]);

  streetsList: Observable<any[]> = observableOf([
    { City_code: "3000", Street_desc: 'הזית' },
    { City_code: "3000", Street_desc: 'ברזיל' },
    { City_code: 4, Street_desc: 'טרומפלדור' },
    { City_code: 4, Street_desc: 'ארלוזרוב' }
  ]);

  //toggleDisabled: boolean = true;

  constructor(private fb: FormBuilder, el: ElementRef, private dataService: DataService, private umbracoDataService: UmbracoDataService) {

    this.demoForm = this.fb.group({
      firstName: [null, [mohValidators.required(), mohValidators.minLength(2, 'יש להזין שם פרטי ארוך יותר'), mohValidators.maxLength(20)]],
      lastName: ['', [mohValidators.minLength(2), mohValidators.maxLength(20)]],
      checkBox: [],
      textArea: [],
      radio: [{ code: 1, text: 'שחור' }],
      checkboxGroup: [],
      Address: [{
        appartmentNumber: '1', cityId: { Code: "3000", Description: "ירושלים" }, entrance: { Id: 4, text: "ו" }, houseNumber: '1',
        postbox: '1', streetId: { City_code: "3000", Street_desc: "הרב אברהם רביץ      ", Street_code: "3038" }, zipCode: '1'
      }],
      toggle: [],
      reCaptcha: [],
      select: [{ Id: 20, text: 'ggg' }],
      stringArraySelect: ['לבן'],
      dateSelect: [{ year: null, month: null, day: null }],
      tel: [{ prefix: null, phoneNumber: null }],//new Prefix(1,'050') //{code:1, text:"050"}
      datePickerField: [],//new Date(2018,6,18)
      uploader: [],
      password: [],
      formArray: new FormArray([this.getArrayItem()]),
      richTextEditor: [],
      radiobuttonTable: ['', mohValidators.required()],
      rating: ['', mohValidators.required()],
    });

    this.absControl = this.getArrayItem();


    /*this.demoForm.controls.lastName.setValue("Ruthi");
    this.demoForm.controls.richTextEditor.setValue("ruthi");*/

    //this.demoForm.controls.toggle.disable();
    //this.demoForm.controls.toggle.enable();
    //this.demoForm.controls.firstName.disable();

  }

  getArrayItem(): AbstractControl {
    return new FormGroup({
      firstName: new FormControl('', [mohValidators.required()]),
      lastName: new FormControl('', [mohValidators.minLength(2)]),
      address: new FormGroup({
        city: new FormControl('ירושלים', [mohValidators.required()])
      })
    })
  }

  optionsList: Observable<any[]> = observableOf([
    { Id: 1, text: 'רישום יבואן' },
    { Id: 2, text: 'אישור מוקדם ליבוא מזון רגיש ' },
    { Id: 3, text: 'הצהרה' },
    { Id: 4, text: 'בקשה חדשה' }
  ]);

  colorsList: any[] = [{ code: 1, text: 'שחור' }, { code: 2, text: 'לבן' }, { code: 3, text: 'אדום' }];

  stringArray: Observable<any[]> = observableOf(['שחור', 'לבן', 'אדום']);

  slideToggleOptions: ToggleOption[] = [new ToggleOption('זכר', 1), new ToggleOption('נקבה', 2), new ToggleOption('אחר', 3)];

  items: any[];

  ngOnInit() {

    this.dataService.getEdmList("CodeValueTable").subscribe(
      resultArray => { this.items = resultArray; console.log("serverListItems:", this.items); },
      error => console.log("Error :: " + error)
    );

    //this.umbracoDataService.getList('cities', 'MohBase').subscribe(
    //  resultArray => { console.log("cities list from umbraco data service :", resultArray); },
    //  error => console.log("Error :: " + error)
    //);

    //setInterval(() => {
    //  this.toggleDisabled = !this.toggleDisabled;
    //  //this.demoForm.controls.toggle.disable();
    //}, 4000)

    this.settings.allowMimeTypes = ['image/png', 'image/gif', 'video/mp4', 'image/jpeg', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/x-bzip'];
    this.settings.maxFileSize = 1 * 1024 * 1024;
    this.settings.queueLimit = 5;
    //this.settings.tooltipText = "ניתן להעלות קבצים מסוג: doc, docx, pdf, tiff, png, jpg, tif, gif.גודל הקובץ המקסימלי הינו  30 MB. לא ניתן להעלות יחד קבצים בעלי שם זהה."
    //this.settings.buttonText = "+ בחר קובץ";
    //this.settings.fieldText = "תיאור הקובץ";
    this.settings.isMultiple = true;
    this.settings.hasDescription = true;
    this.settings.queueMinLimit = 0;
    this.settings.isDescriptionRequired = true;
    this.settings.isRequired = true;
    //this.settings.isSigned = true;
  }

  addAdress() {


    (<FormArray>this.demoForm.controls.Addresses).push(new FormControl());

  }
  sendReq() {
    console.log('sendReq func');
    console.log(this.demoForm.value);
  }


  asToggleOption(options: any[], textField: string, codeFiled: string): ToggleOption[] {
    var returnOptions = [];

    options.forEach(o => {
      returnOptions.push(new ToggleOption(o[textField], o[codeFiled]));
    });

    //return this.returnOptions;
    return returnOptions;
  }


}








