// import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import { MohAgGridService, colExtraDef, MohTranslateService, UmbracoDataService } from 'moh-angular-lib';
// import { ColDef, GridOptions } from 'ag-grid-community';
// import { TableDataService } from './tableData.service';

// @Component({
//   selector: 'app-ag-grid-v2',
//   templateUrl: './ag-grid-v2.component.html',
//   styleUrls: ['./ag-grid-v2.component.css']
// })
// export class AgGridV2Component implements OnInit {

//   columns: ColDef[];
//   //rowData: Student[];
//   gridOptions: GridOptions;
//   rerender: boolean;
//   gridApi;
//   gridColumnApi;
//   _localeText;
//   arrayBuffer: any;
//   file: File;
//   rowData: any[];
//   headers: any[];
//   //jsonData: any;
//   constructor(private userService: TableDataService, private _cdref: ChangeDetectorRef,
//     private gridAgService: MohAgGridService, private mohTranslateService: MohTranslateService, private umbracoDataService: UmbracoDataService) {
//     this.gridOptions = this.gridAgService.getMohGridOptions();
//     this.gridOptions.onGridReady = (params): any => {
//     this.gridApi = params.api;
//     this.gridColumnApi = params.columnApi;
//     const eGridDiv = document.querySelector('.ag-theme-material');
//     params.api.sizeColumnsToFit();
//     }
//   }

//   ngOnInit() {

//     this.userService.getUser().subscribe((res) => {
//       res.forEach(element => {
//         element.brithDate = new Date("03/05/1984");
//       });
//       this.rowData = res;
//     });


//     this.columns = [
//       this.gridAgService.getMohSelectColumn('name', { arrayParams: ["ruthi", "batya", "rivki", "odelia"], editable: true, isPinned: false }),
//       this.gridAgService.getMohLinkColumn('email', { translateCode: 'Email_Label', routerLink: "/wizard/address", arrayParams: ["name"] }),
//       this.gridAgService.getMohColumn("company.name", { editable: true, translateCode: 'company' }),
//       this.gridAgService.getMohLinkColumn('phone', { translateCode: 'tel', matIconName: 'call', routerLink: 'url' }),
//       this.gridAgService.getMohDateColumn('brithDate', new colExtraDef({ translateCode: 'birthDate' })),
//       this.gridAgService.getMohLinkColumn('next', { translateCode: 'next', matIconName: 'arrow_back_ios', routerLink: "/wizard/personal", arrayParams: ["name"] }),
//       //this.gridAgService.getMohColumn('trtr'),
//       //this.gridAgService.getMohColumn('trtr1'),
//     ];
//   }
  
//   onCellValueChanged(event) {
//     console.log(event) // access the entire event object
//     console.log(event.data) // access and print the updated row data
//   }

// }
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable } from 'rxjs';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'table-overview-example',
  styleUrls: ['./ag-grid-v2.component.css'],
  templateUrl: './ag-grid-v2.component.html',
})
export class AgGridV2Component implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;
  columns: any[];
  colors=[{code:'1', value:'red'},{code:'2', value:'green'}, {code:'3', value:'blue'}];
  private dataSubject = new BehaviorSubject<UserData[]>([]);
  //displayedColumns: string[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
    // this.columns = [{
    //   field: 'id'
    // }, {
    //   field: 'name'
    // }, {
    //   field: 'progress'
    // }, {
    //   field: 'color'
    // }];
    // this.displayedColumns = this.columns.map(column => column.field);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  setupFilter(column: string) {
    this.dataSource.filterPredicate = (d: UserData, filter: string) => {
      const textToSearch = d[column] && d[column].toLowerCase() || '';
      return textToSearch.indexOf(filter) !== -1;
    };
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  update(el: UserData, progress: string) {
    if (progress == null) { return; }
    // copy and mutate
    //const copy = this.dataSource.eData().slice()
    const copy = this.dataSubject.value.slice();
    el.progress = progress;
    //this.dataSource.update(copy);
    this.dataSubject.next(copy)
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
// export class ExampleDataSource extends MatTableDataSource<UserData> {

//   private dataSubject = new BehaviorSubject<UserData[]>([]);

//   eData() {
//     return this.dataSubject.value;
//   }

//   update(data) {
//     this.dataSubject.next(data);
//   }

//   constructor(data: any[]) {
//     super();
//     this.dataSubject.next(data);
//   }

//   /** Connect function called by the table to retrieve one stream containing the data to render. */
//   connect(): BehaviorSubject<UserData[]> {
//     //super.connect();
//     return this.dataSubject;
//   }

//   disconnect() {}
// }