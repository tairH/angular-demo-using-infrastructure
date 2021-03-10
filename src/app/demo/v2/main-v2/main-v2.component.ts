import { Component, OnInit } from '@angular/core';
import { IMenuItem } from 'moh-package';

@Component({
  selector: 'moh-main-v2',
  templateUrl: './main-v2.component.html',
  styleUrls: ['./main-v2.component.scss']
})
export class MainV2Component implements OnInit {

  menuItems: IMenuItem[];
  staticBreadcrumbs = [
    { labelKey: "אתר משרד הבריאות", url: "http://www.health.gov.il", isExternal: true, isStatic: true },
    { labelKey: "תשתיות", url: "/" }
  ];

  constructor() { }

  ngOnInit() {

    this.menuItems = [
      {
        title: 'טפסים', url: '', children:
        [
            {
              titleKey: 'טופס 1', url: '/v2/form', children: [
                { titleKey: 'טופס 1', url: '/v2/form'}
              ]
            }]
        //{ title: 'wizard', url: '/v2/wizard' }]
      },
      /*{
        title: 'טבלה', url: '/v2/grid'
      },*/
      { title: 'wizard', url: '/v2/wizard' },
      { title: 'dashboard', url: '/v2/dashboard' },
      { title: 'table', url: '/v2/mat-table' },
      { title: 'grid', url: '/v2/grid' },
      {
        title: 'חיצוני', url: 'https://www.health.gov.il/', isExternal: true, isStatic: true
      }
    ];
  }

}
