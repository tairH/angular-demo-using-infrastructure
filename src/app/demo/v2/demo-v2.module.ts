import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  FileUploaderV2Module, DirectivesModule, HeaderV2Module, FooterV2Module, TooltipV2Module,
  SectionTitleV2Module, AddressV2Module, TelephoneV2Module, BannerV2Module, FormTitleV2Module,
  CheckboxV2Module, BreadcrumbsModule, RadiobuttonGroupV2Module, ButtonV2Module, InfoV2Module,
  SlideToggleV2Module, TextboxV2Module, DividerModule, LabelFieldModule, TextareaV2Module,
  RecaptchaModule, SubmitButtonV2Module, SelectV2Module, DatepickerV2Module, SpinnerModule,
  ErrorMessageV2Module, DateSelectV2Module, DropdownMenuV2Module, RadiobuttonTableV2Module, RatingV2Module,
  NavbarV2Module, PasswordV2Module, RichTextEditorV2Module, CheckboxGroupV2Module, MainContentModule,
  FormCardV2Module, FormArrayTemplateModule, SkipNavLinksModule, SignaturePadModule, StickySectionModule, DashboardModule,
    TimeselectModule, MultiSelectModule, AutocompleteModule
} from 'moh-package';
import { AgGridModule } from "ag-grid-angular";
//import { SignaturePadModule } from 'angular2-signaturepad';

import { AgGridV2Component } from './ag-grid-v2/ag-grid-v2.component';
import { FormLayoutV2Component } from './form-layout-v2/form-layout-v2.component';
import { MainV2Component } from './main-v2/main-v2.component';
import { WizardV2Module } from './wizard-v2/wizard-v2.module';
import { TableDataService } from './ag-grid-v2/tableData.service';
import { MatTableDataService } from './mat-table/tableData.service';

import { AppRoutingModule } from '../..//app-routing.module';
//import { MohHttpInterceptorService } from '../../../services/moh-http-interceptor.service';
import { MatFormFieldModule, MatPaginatorModule, MatTableModule,MatSortModule, MatInputModule, MatSelectModule } from '@angular/material';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
//import { SatPopoverModule } from '@ncstate/sat-popover';
//import { InlineEditComponent } from './inline-edit/inline-edit.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    // NgbModule.forRoot(),
    //HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ButtonV2Module,
    CheckboxV2Module,
    HeaderV2Module,
    FooterV2Module,
    TooltipV2Module,
    SectionTitleV2Module,
    TextboxV2Module,
    LabelFieldModule,
    TelephoneV2Module,
    TextareaV2Module,
    RadiobuttonGroupV2Module,
    SlideToggleV2Module,
    BannerV2Module,
    FormTitleV2Module,
    BreadcrumbsModule,
    AddressV2Module,
    InfoV2Module,
    DividerModule,
    RecaptchaModule,
    FileUploaderV2Module,
    SubmitButtonV2Module,
    SelectV2Module,
    RadiobuttonTableV2Module,
    DatepickerV2Module,
    SpinnerModule,
    ErrorMessageV2Module,
    DateSelectV2Module,
    DropdownMenuV2Module,
    NavbarV2Module,
    MainContentModule,
    DirectivesModule,
    PasswordV2Module,
    RichTextEditorV2Module,
    RatingV2Module,
    CheckboxGroupV2Module,
    WizardV2Module,
    FormArrayTemplateModule,
    FormCardV2Module,
    SkipNavLinksModule,
    AgGridModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    //SatPopoverModule,
    FormsModule,
    SignaturePadModule,
    DashboardModule,
    TimeselectModule,
    MultiSelectModule,
    AutocompleteModule
  ],
  declarations: [FormLayoutV2Component, MainV2Component, AgGridV2Component, DashboardLayoutComponent],
  providers: [
    // HttpModule,
    TableDataService,
    HttpClientModule,
    MatTableDataService
  ]
})
export class DemoV2Module { }
