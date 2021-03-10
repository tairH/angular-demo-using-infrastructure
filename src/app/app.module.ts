import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector } from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
// import { MaterialModule } from './material/material.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';


import {
  FileUploaderModule
  , HeaderModule
  , FooterModule
  , TooltipModule
  , SectionTitleModule
  , AddressModule
  , TelephoneModule
  , BannerModule
  , FormTitleModule
  , CheckboxModule
  , BreadcrumbsModule
  , RadiobuttonGroupModule
  , ButtonModule
  , InfoModule
  , SlideToggleModule
  , TextboxModule
  , DividerModule
  , LabelFieldModule
  , TextareaModule
  , RecaptchaModule
  , SubmitButtonModule
  , SelectModule
  , DatepickerModule
  , SpinnerModule
  , ErrorMessageModule
  , DateSelectModule
  , DropdownMenuModule
  , RadiobuttonTableModule
  , RatingModule
  , NavbarModule, MohPackageModule, MohAgGridModule, LinkCellRendererComponent, DateCellRendererComponent, MainContentModule
  , SkipNavLinksModule
  , FormCardModule
  , FormArrayTemplateModule
  , DirectivesModule
  , RichTextMessageModule
  , PasswordModule
  , RichTextEditorModule
  , CheckboxGroupModule
  , MohMatTableModule
} from 'moh-package';
// import { SharedModule } from 'moh-angular-lib';

import {
  MatTableModule
} from '@angular/material';
import { AgGridComponent } from './grid/ag-grid/ag-grid.component';

import { AppComponent } from './app.component';

import { FormLayoutComponent } from './demo/v1/form-layout/form-layout.component';
import { WizardFormModule } from './demo/v1/wizard-form/wizard-form.module';
import { environment } from '../environments/environment';


import { AgGridModule } from "ag-grid-angular";
import { TableDataService } from './grid/ag-grid/tableData.service';

// import { HttpClientModule } from '@angular/common/';

import { MainComponent } from './demo/v1/main/main.component';
import { DemoV2Module } from './demo/v2/demo-v2.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatTableComponent} from './demo/v2/mat-table/mat-table.component'


//import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material';
/**
 * @ignore
 */
@NgModule({
  declarations: [
    AppComponent,
    FormLayoutComponent,
    AgGridComponent,
    AgGridComponent,
    MainComponent,
    MatTableComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    // SharedModule,
    // NgbModule.forRoot(),
    //HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    ButtonModule,
    CheckboxModule,
    HeaderModule,
    FooterModule,
    TooltipModule,
    SectionTitleModule,
    TextboxModule,
    LabelFieldModule,
    TelephoneModule,
    TextareaModule,
    RadiobuttonGroupModule,
    SlideToggleModule,
    BannerModule,
    FormTitleModule,
    BreadcrumbsModule,
    AddressModule,
    InfoModule,
    DividerModule,
    RecaptchaModule,
    FileUploaderModule,
    SubmitButtonModule,
    SelectModule,
    RadiobuttonTableModule,
    DatepickerModule,
    SpinnerModule,
    ErrorMessageModule,
    DateSelectModule,
    DropdownMenuModule,
    NavbarModule,
    MohPackageModule.forRoot(),
    MohPackageModule.configure(environment.configFile),
    MainContentModule,
    WizardFormModule,
    SkipNavLinksModule,
    FormCardModule,
    DirectivesModule,
    RichTextMessageModule,
    FormArrayTemplateModule,
    PasswordModule,
    MohAgGridModule,
    RichTextEditorModule,
    RatingModule,
    DemoV2Module,
    CheckboxGroupModule,
    NgxMaterialTimepickerModule,
    AgGridModule.withComponents([
      LinkCellRendererComponent,
      DateCellRendererComponent
    ]),
    MatTableModule,
    MohMatTableModule
  ],
  providers:
    [TableDataService,
      HttpClientModule,
      HttpClientModule,
    ],
  // {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true}
  bootstrap: [AppComponent]
})
export class AppModule { }
