import { NgModule } from '@angular/core';
// import { SharedModule } from 'moh-angular-lib';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { WizardFormComponent } from './wizard-form.component';
import { AddressComponent } from './address/address.component';
import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { ResultComponent } from './result/result.component';

import {
  WizardRouteModule
  , TextboxModule
  , ErrorMessageModule
  , RadiobuttonGroupModule
  , SlideToggleModule
  , TelephoneModule
  , SelectModule
  , CheckboxModule
  , FormArrayTemplateModule
  , FormCardModule
} from 'moh-package';

/**
 * @ignore
 */
@NgModule({
  imports: [
    // SharedModule,
    CommonModule,
    WizardRouteModule,
    ReactiveFormsModule,
    TextboxModule,
    ErrorMessageModule,
    RadiobuttonGroupModule,
    SlideToggleModule,
    TelephoneModule,
    SelectModule,
    CheckboxModule,
    FormArrayTemplateModule,
    FormCardModule
  ],
  declarations: [
    WizardFormComponent,
    AddressComponent,
    PersonalComponent,
    WorkComponent,
    ResultComponent
  ],
  exports: [
    WizardFormComponent,
    AddressComponent,
    PersonalComponent,
    WorkComponent,
    ResultComponent
  ]
})
export class WizardFormModule { }
