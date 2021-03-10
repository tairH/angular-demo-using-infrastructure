import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableDataService } from './tableData.service';

import { MatTablePaginatorComponent, MohMatTableService, ToggleOption } from 'moh-package';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MatTableComponent implements OnInit {
  filterValue: any = {};

  generalFilterValue: string;
  emailFilterValue: string;
  nameFilterValue: string;
  dateFilterValue: string;
  displayColumns: string[] = ['name', 'email', 'birthDate', 'isMale', 'id'];
  dataSource = new MatTableDataSource<any>([]);
  dataObjects: any[] = [];
  options1: any[] = [{ id: 0, text: 'לא' }, { id: 1, text: 'כן' }];
  options: any[] = [{ 'id': 1, 'name1': 'Kurtis Weissnat  ' }, { 'id': 2, 'name1': 'Mrs. Dennis Schulist' }];
  options$: Observable<any[]> = of(this.options);
  toggleOptions: ToggleOption[] = [new ToggleOption('Kurtis Weissnat  ', 'Kurtis Weissnat  '), new ToggleOption('Mrs. Dennis Schulist', 'Mrs. Dennis Schulist'), new ToggleOption('all', '')];

  itemsPerPage: number = 5;
  pageButtonsSize: number = 2;
  importTextKey: string;
  groupByColumns: string[] = ['id'];
  filterPredicate: (data: any, filter: object) => boolean;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTablePaginatorComponent, { static: true }) customPaginator: MatTablePaginatorComponent;

  constructor(private tableDataService: MatTableDataService, private mohMatTableService: MohMatTableService) {
  }

  ngOnInit() {
    this.mohMatTableService.filteredColumns = {};

    this.mohMatTableService.initDataSource(this.dataSource, this.dataObjects, this.displayColumns);
    this.filterValue = this.tableDataService.tableFilterValue;

    this.importTextKey = 'ImportFromExcel';

    this.tableDataService.getUser().subscribe((res) => {
      res.forEach(element => {
        element.isMale = 1;
        element.birthDate = new Date("12/10/2019");
        if (element.name == 'Mrs. Dennis Schulist')
          element.birthDate = new Date("12/11/2019");
        if (element.name == 'Kurtis Weissnat')
          element.birthDate = new Date("12/12/2019");
        //if (element.id>4){
        //  element.id=1;
        //}
        //else element.id=2;

      });
      this.dataObjects = res;
      //this.dataSource.data = this.dataObjects;
      this.mohMatTableService.updateDataSource(this.dataObjects);

      this.mohMatTableService.addGroups(this.dataObjects, this.groupByColumns).then(data => {
      this.mohMatTableService.updateDataSource(data);
      });
      //   this.updateFilterPredicate();
      //  this.dataSource.filterPredicate =this.mohMatTableService.overrideFilterPredicate(this.filterPredicate);
      this.dataSource.sort = this.sort;

      if (this.customPaginator && this.customPaginator.paginator)
        this.dataSource.paginator = this.customPaginator.paginator;
    });

  }
  emailChange(event: any) {
    console.log('emailChange', event);
    console.log('getDataAfterEdit', this.mohMatTableService.getDataAfterEdit())
    console.log('originalData', this.mohMatTableService.originalData)

  }

  ngOnDestroy(): void {
    let filterValue: any = {};
    if (this.mohMatTableService.filteredColumns) {
      Object.assign(filterValue, this.mohMatTableService.filteredColumns);
      filterValue['generalSearch'] = this.mohMatTableService.getGeneralSearch();
      this.tableDataService.tableFilterValue = filterValue;
    }
  }

  updateFilterPredicate() {
    this.filterPredicate = (data, filter) => {
      let condition = true;
      for (let key in filter) {
        if (filter[key] instanceof Array) {
          let subCondition = false;
          filter[key].forEach(item => {
            subCondition = subCondition || (data[key] && data[key].toString().toLowerCase().indexOf(item.toString().trim().toLowerCase()) !== -1);
          });
          condition = condition && (subCondition);
        }
        else {
          if (key === 'company') {
            condition = condition && (data[key].name && data[key].name.toString().toLowerCase().indexOf(filter[key].toString().trim().toLowerCase()) !== -1);
          }
          else
            condition = condition && (data[key] && data[key].toString().toLowerCase().indexOf(filter[key].toString().trim().toLowerCase()) !== -1);
        }
      }
      return condition;
    };
  }

  importUpdateTable(data) {
    data.map(item => {
      if (!isNaN(Date.parse(item.birthDate))) {
        item.birthDate = new Date(item.birthDate);
      }
    })
    this.dataObjects.push(...data);
    //this.mohMatTableService.updateDataSource(this.dataObjects);
    this.mohMatTableService.addGroups(this.dataObjects, this.groupByColumns).then(data => {
      this.mohMatTableService.updateDataSource(data);
    });

  }

  cancelEdit() {
    this.mohMatTableService.cancelEdit();
  }
  saveEdit() {
    // this is the object with the updated data
    console.log(this.mohMatTableService.getDataAfterEdit());
  }
}


