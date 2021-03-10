import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TooltipComponent } from '@angular/material';
// import { TelephoneComponent } from './moh-package/components/telephone/v1/telephone.component';
import { FormLayoutComponent } from './demo/v1/form-layout/form-layout.component';
import { WizardFormComponent } from './demo/v1/wizard-form/wizard-form.component';

import { PersonalComponent } from './demo/v1/wizard-form/personal/personal.component';
import { WorkComponent } from './demo/v1/wizard-form/work/work.component';
import { AddressComponent } from './demo/v1/wizard-form/address/address.component';
import { ResultComponent } from './demo/v1/wizard-form/result/result.component';

import { WorkflowGuard, WizardDeactivateGuard } from 'moh-package';
import { AgGridComponent } from './grid/ag-grid/ag-grid.component';
import { MainComponent } from './demo/v1/main/main.component';
import { MainV2Component } from './demo/v2/main-v2/main-v2.component';
import { FormLayoutV2Component } from './demo/v2/form-layout-v2/form-layout-v2.component';
import { WizardV2Component } from './demo/v2/wizard-v2/wizard-v2.component';
import { PersonalV2Component } from './demo/v2/wizard-v2/personal-v2/personal-v2.component';
import { WorkV2Component } from './demo/v2/wizard-v2/work-v2/work-v2.component';
import { AddressV2Component } from './demo/v2/wizard-v2/address-v2/address-v2.component';
import { ResultV2Component } from './demo/v2/wizard-v2/result-v2/result-v2.component';
import { AgGridV2Component } from './demo/v2/ag-grid-v2/ag-grid-v2.component';
import { MatTableComponent } from './demo/v2/mat-table/mat-table.component';
import { DashboardLayoutComponent } from './demo/v2/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  /*{ path: '', redirectTo: '/form' , pathMatch: 'full'},
  { path: 'form', component: FormLayoutComponent },
  {
    path: 'wizard', component: WizardFormComponent,
    children: [
      // 1st Route
      { path: 'personal', component: PersonalComponent, canDeactivate: [WizardDeactivateGuard] },
      // 2nd Route
      { path: 'work', component: WorkComponent, canActivate: [WorkflowGuard], canDeactivate: [WizardDeactivateGuard] },
      // 3rd Route
      { path: 'address', component: AddressComponent, canActivate: [WorkflowGuard], canDeactivate: [WizardDeactivateGuard] },
      // 4th Route
      { path: 'result', component: ResultComponent, canActivate: [WorkflowGuard], canDeactivate: [WizardDeactivateGuard] },
      // 5th Route
      { path: '', redirectTo: 'personal', pathMatch: 'full' },
      // 6th Route
      { path: '**', component: PersonalComponent }
    ]
  },
  { path: 'grid', component: AgGridComponent },
  { path: 'home', component: TooltipComponent },*/
  { path: '', redirectTo: '/v2/form', pathMatch: 'full' },
  { path: 'v1', redirectTo: '/v1/form', pathMatch: 'full' },
  {
    path: 'v1', component: MainComponent,
    children: [
      { path: 'form', component: FormLayoutComponent },
      { path: 'grid', component: AgGridComponent },
      {
        path: 'wizard', component: WizardFormComponent,
        children: [
          { path: 'personal', component: PersonalComponent, canDeactivate: [WizardDeactivateGuard] },
          { path: 'work', component: WorkComponent, canActivate: [WorkflowGuard], canDeactivate: [WizardDeactivateGuard] },
          { path: 'address', component: AddressComponent, canActivate: [WorkflowGuard], canDeactivate: [WizardDeactivateGuard] },
          { path: 'result', component: ResultComponent, canActivate: [WorkflowGuard], canDeactivate: [WizardDeactivateGuard] },
          { path: '', redirectTo: 'personal', pathMatch: 'full' },
          { path: '**', component: PersonalComponent }
        ]
      }
    ]
  },

  { path: 'v2', redirectTo: '/v2/form', pathMatch: 'full' },
  {
    path: 'v2', component: MainV2Component,
    children: [
      { path: 'form', component: FormLayoutV2Component },
      { path: 'grid', component: AgGridV2Component },
      { path: 'mat-table', component: MatTableComponent },
      { path: 'dashboard', component: DashboardLayoutComponent },
      {
        path: 'wizard', component: WizardV2Component,
        children: [
          { path: 'personal', component: PersonalV2Component, canDeactivate: [WizardDeactivateGuard] },
          { path: 'work', component: WorkV2Component, canActivate: [WorkflowGuard], canDeactivate: [WizardDeactivateGuard] },
          { path: 'address', component: AddressV2Component, canActivate: [WorkflowGuard], canDeactivate: [WizardDeactivateGuard] },
          { path: 'result', component: ResultV2Component, canActivate: [WorkflowGuard], canDeactivate: [WizardDeactivateGuard] },
          { path: '', redirectTo: 'personal', pathMatch: 'full' },
          { path: '**', component: PersonalV2Component }
        ]
      }
    ]
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
