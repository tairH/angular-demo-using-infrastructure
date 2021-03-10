import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { SharedModule } from 'moh-angular-lib';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {
  WizardRouteV2Module
  , TextboxV2Module
  , ErrorMessageV2Module
  , RadiobuttonGroupV2Module
  , SlideToggleV2Module
  , TelephoneV2Module
  , SelectV2Module
  , CheckboxV2Module
  , FileUploaderV2Module
} from 'moh-package';

import { WizardV2Component } from './wizard-v2.component';
import { AddressV2Component } from './address-v2/address-v2.component';
import { PersonalV2Component } from './personal-v2/personal-v2.component';
import { WorkV2Component } from './work-v2/work-v2.component';
import { ResultV2Component } from './result-v2/result-v2.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // SharedModule,
    WizardRouteV2Module,
    TextboxV2Module,
    ErrorMessageV2Module,
    RadiobuttonGroupV2Module,
    SlideToggleV2Module,
    TelephoneV2Module,
    SelectV2Module,
    CheckboxV2Module,
    FileUploaderV2Module,
    FlexLayoutModule
  ],
  declarations: [
    WizardV2Component,
    AddressV2Component,
    PersonalV2Component,
    WorkV2Component,
    ResultV2Component
  ]
})
export class WizardV2Module { }
