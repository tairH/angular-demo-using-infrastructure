import { of as observableOf, Observable } from 'rxjs';
import { Component, OnInit, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { FormGroup, ValidatorFn, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import {
  UploaderSettings, formControlInfo, mohValidators, ToggleOption, SelectGroup,
  JsonDataService,
  FreeTextOption, TelephoneV2Component
} from 'moh-package';
//import { isArray, consistOfArrays, consistOfObjects, minLines, minPointsInEachNLines } from 'projects/moh-angular-demo/src/app/demo/signature-pad/angular-signature-pad.module';
//import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'moh-form-layout-v2',
  templateUrl: './form-layout-v2.component.html',
  styleUrls: ['./form-layout-v2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormLayoutV2Component implements OnInit {


  //@ViewChild(SignaturePad, {static:true}) signaturePad: SignaturePad;
  @ViewChild('telephone', { static: true }) telephone: TelephoneV2Component;



  form: FormGroup;
  isDisabled: boolean;
  settings: UploaderSettings = new UploaderSettings();
  datePickerValidators: ValidatorFn[] = [];
  slideToggleOptions: ToggleOption[] = [new ToggleOption('זכר', false), new ToggleOption('נקבה', 2), new ToggleOption('אחר', 3)];
  cityValidators: ValidatorFn[] = [mohValidators.required()];
  optionsList: Observable<any[]> = observableOf([
    { Id: 0, text: 'רישום יבואן', disabled: true },
    { Id: 2, text: 'אישור מוקדם ליבוא מזון רגיש ' },
    { Id: 3, text: 'הצהרה' },
    { Id: 4, text: 'בקשה חדשה' }
  ]);
  optionsList1: any[];
  autocompleteOptions: any[] = [
    { Id: 0, tag: 'אחד', text: 'רישום יבואן', disabled: true },
    { Id: 2, tag: 'שתיים', text: 'אישור מוקדם ליבוא מזון רגיש ' },
    { Id: 3, tag: 'שלוש', text: 'הצהרה' },
    { Id: 4, tag: 'ארבע', text: 'בקשה חדשה' }
  ];
  groupsList$: Observable<SelectGroup[]> = observableOf([{
    title: 'קבוצה ראשונה',
    options: [
      { Id: 3, text: 'הצהרה' },
      { Id: 4, text: 'בקשה חדשה' }
    ]
  },
  {
    title: 'קבוצה שניה',
    options: [
      { Id: 0, text: 'רישום יבואן' },
      { Id: 2, text: 'אישור מוקדם ליבוא מזון רגיש ' }
    ]
  }]);

  rating: formControlInfo[] = [{ code: 1, textValue: 'כלל לא' }, { code: 2 }, { code: 3 }, { code: 4 }, { code: 5 }, { code: 6 }, { code: 7, textValue: 'במידה רבה מאוד' }];
  ratingNFOption: formControlInfo = { code: 9, textValue: 'לא רלונטי' };
  ratingNotKnowOption: formControlInfo = { code: 1, textValue: 'לא ידוע' };

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


  //testForm: FormGroup;
  //signatureControl: FormControl;

  stringArray: Observable<any[]> = observableOf(['שחור', 'לבן', 'אדום']);

  colorsList: any[] = [{ code: 1, text: 'שחור' }, { code: 2, text: 'לבן' },
  { code: 3, text: 'אדום' }, { code: 4, text: 'ירוק' },
  { code: 5, text: 'כחול' }, { code: 6, text: 'צהוב' },
  { code: 7, text: 'אחר' }];
  constructor(
    private fb: FormBuilder, private http: HttpClient, private jsonDataService: JsonDataService) {
    //this.testForm = fb.group({
    //  signature: ['', [
    //    isArray,
    //    consistOfArrays,
    //    consistOfObjects,
    //    minLines(1),
    //    minPointsInEachNLines(4, 1)
    //  ]]
    //});
    //this.signatureControl = this.testForm.get('signature') as FormControl;

  }
  timeChanged(event) {
    console.log(event);
  }
  ngOnInit(): void {
    this.optionsList1 = [
      { Id: 0, text: 'רישום יבואן', disabled: true },
      { Id: 2, text: 'אישור מוקדם ליבוא מזון רגיש ' },
      { Id: 3, text: 'הצהרה' },
      { Id: 4, text: 'בקשה חדשה' }
    ];

    this.form = this.fb.group({
      lastName: ['', [mohValidators.maxLength(25, "אין להזין שם משפחה הארוך מ-25 תווים"), mohValidators.required()]],
      textarea: ['', [mohValidators.maxLength(250), mohValidators.required()]],
      inputRequiredIf: ['', [mohValidators.requiredIfValidator(() => this.form ? this.form.get('textarea').value : null)]],
      inputConditionalValidator: ['', [mohValidators.conditionalValidator(() => this.form ? this.form.get('textarea').value : null, mohValidators.maxLength(5))]],
      datePicker: ['', [mohValidators.required()]],
      select: ['', [mohValidators.required()]],
      autoComplete: [null, [mohValidators.required()]],
      telephone: [],
      password: ['', [mohValidators.required()]],
      radiobuttonTable: [''],
      rating: ['', mohValidators.required()],
      checkboxGroup: ['', mohValidators.required()],
      checkBox: ['', mohValidators.requiredTrue()],
      dateSelect: [],
      toggle: [false, mohValidators.required()],
      uploader: [],
      richTextEditor: [],
      Address: [],
      radio: [new FreeTextOption(7, 'ורוד'), [mohValidators.required()]],
      signature: ['', mohValidators.required()],
      multiSelect: ['', [mohValidators.required()]],
      time: ['', mohValidators.required()],
      newAutocomplete: ['', mohValidators.required()]
    });

    //this.form.controls.signature.setValue("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAFG0lEQVR4Xu3UsW2UURSE0bcWggwRUQENIEBkliCnHPqiAucOoCCEWFLiCTwe+zj//e6ee/Vdjj8CBAiMCFxG5jQmAQIEjmA5AgIEZgQEa2ZVBiVAQLDcAAECMwKCNbMqgxIgIFhugACBGQHBmlmVQQkQECw3QIDAjIBgzazKoAQICJYbIEBgRkCwZlZlUAIEBMsNECAwIyBYM6syKAECguUGCBCYERCsmVUZlAABwXIDBAjMCAjWzKoMSoCAYLkBAgRmBARrZlUGJUBAsNwAAQIzAoI1syqDEiAgWG6AAIEZAcGaWZVBCRAQLDdAgMCMgGDNrMqgBAgIlhsgQGBGQLBmVmVQAgQEyw0QIDAjIFgzqzIoAQKC5QYIEJgREKyZVRmUAAHBcgMECMwICNbMqgxKgIBguQECBGYEBGtmVQYlQECw3AABAjMCgjWzKoMSICBYboAAgRkBwZpZlUEJEBAsN0CAwIyAYM2syqAECAiWGyBAYEZAsGZWZVACBATLDRAgMCMgWDOrMigBAoLlBggQmBEQrJlVGZQAAcFyAwQIzAgI1syqDEqAgGC5AQIEZgQEa2ZVBiVAQLDcAAECMwKCNbMqgxIgIFhugACBGQHBmlmVQQkQECw3QIDAjIBgzazKoAQICJYbIEBgRkCwZlZlUAIEBMsNECAwIyBYM6syKAECguUGCBCYERCsmVUZlAABwXIDBAjMCAjWzKoMSoCAYLkBAgRmBARrZlUGJUBAsNwAAQIzAoI1syqDEiAgWG6AAIEZAcGaWZVBCRAQLDdAgMCMgGDNrMqgBAgIlhsgQGBGQLBmVmVQAgQEyw0QIDAjIFgzqzIoAQKC5QYIEJgREKyZVRmUAAHBcgMECMwICNbMqgxKgIBguQECBGYEBGtmVQYlQECw3AABAjMCgjWzKoMSICBYboAAgRkBwZpZlUEJEBAsN0CAwIyAYM2syqAECAiWGyBAYEZAsGZWZVACBATLDRAgMCMgWDOrMigBAoLlBggQmBEQrJlVGZQAAcFyAwQIzAgI1syqHtegn79cP1wu5+055931et6cy3l9f3f5/rimNM1TExCsp7bRB/g9n77++XbO3x8353rz/3P3d6/c0wP4P+cnHNhz3n742z/e/n5/fXEuP+9e/gr/hc8IRAKCFbH5iACBhoBgNdS9SYBAJCBYEZuPCBBoCAhWQ92bBAhEAoIVsfmIAIGGgGA11L1JgEAkIFgRm48IEGgICFZD3ZsECEQCghWx+YgAgYaAYDXUvUmAQCQgWBGbjwgQaAgIVkPdmwQIRAKCFbH5iACBhoBgNdS9SYBAJCBYEZuPCBBoCAhWQ92bBAhEAoIVsfmIAIGGgGA11L1JgEAkIFgRm48IEGgICFZD3ZsECEQCghWx+YgAgYaAYDXUvUmAQCQgWBGbjwgQaAgIVkPdmwQIRAKCFbH5iACBhoBgNdS9SYBAJCBYEZuPCBBoCAhWQ92bBAhEAoIVsfmIAIGGgGA11L1JgEAkIFgRm48IEGgICFZD3ZsECEQCghWx+YgAgYaAYDXUvUmAQCQgWBGbjwgQaAgIVkPdmwQIRAKCFbH5iACBhoBgNdS9SYBAJCBYEZuPCBBoCAhWQ92bBAhEAoIVsfmIAIGGgGA11L1JgEAkIFgRm48IEGgICFZD3ZsECEQCghWx+YgAgYaAYDXUvUmAQCQgWBGbjwgQaAgIVkPdmwQIRAKCFbH5iACBhoBgNdS9SYBAJPAP6iMRlyEoB+UAAAAASUVORK5CYII=");

    this.settings.allowMimeTypes = ['image/png', 'image/gif', 'video/mp4', 'image/jpeg', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/x-bzip'];
    this.settings.maxFileSize = 1 * 1024 * 1024;
    this.settings.queueLimit = 5;
    this.settings.isMultiple = true;
    this.settings.hasDescription = true;
    this.settings.queueMinLimit = 0;
    this.settings.isRequired = true;
    this.settings.isDescriptionRequired = true;
    //this.settings.fileNamePattern = "^[a-zA-Z.]+$";
  }

  asToggleOption(options: any[], textField: string, codeFiled: string): ToggleOption[] {
    var returnOptions = [];

    options.forEach(o => {
      returnOptions.push(new ToggleOption(o[textField], o[codeFiled]));
    });

    //return this.returnOptions;
    return returnOptions;
  }

  sendReq() {
    console.log("Form submitted");
  }

  //selectedDoc: string = 'https://file-examples-com.github.io/uploads/2017/10/file-example_PDF_500_kB.pdf';//'https://file-examples-com.github.io/uploads/2017/02/file-sample_100kB.docx'
  //handleFiles(fileInput: any) {
  //  console.log('fileInput', fileInput)
  //  if (fileInput.target.files && fileInput.target.files[0]) {
  //    const reader = new FileReader();

  //    reader.onload = (e: any) => {
  //      console.log(e)
  //      this.selectedDoc = e.target.result;
  //    };
  //    reader.readAsDataURL(fileInput.target.files[0]);
  //  }

  //}

  comparer(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.text === o2.text : false;
  }

  disable() {
    if (this.isDisabled) {
      this.isDisabled = false;
      this.form.controls.telephone.enable();
      this.form.controls.rating.enable();
      this.form.controls.Address.enable();

    }
    else {
      this.isDisabled = true;
      this.form.controls.telephone.disable();
      this.form.controls.rating.disable();
      this.form.controls.Address.disable();
    }
  }






  //private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
  //  'minWidth': 5,
  //  'canvasWidth': 500,
  //  'canvasHeight': 300
  //};


  //ngAfterViewInit() {
  //  // this.signaturePad is now available
  //  this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
  //  this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  //}

  //drawComplete() {
  //  // will be notified of szimek/signature_pad's onEnd event
  //  console.log(this.signaturePad.toDataURL());
  //}

  //drawStart() {
  //  // will be notified of szimek/signature_pad's onBegin event
  //  console.log('begin drawing');
  //}

}
