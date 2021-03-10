import { Component, OnInit, ViewChild, Output, EventEmitter, Input, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';

import { RowNode, ColDef, GridOptions } from 'ag-grid-community';
import { AppModule } from './../../app.module';
import { TableDataService } from './tableData.service';
import { Student } from './students';
import { MohAgGridService, colExtraDef, UmbracoDataService, MohTranslateService, MohLangChangeEvent } from 'moh-package';
// import * as XLSX from 'ts-xlsx';
//import { saveAs } from 'file-saver';

declare var FileSaver: any;

//import { read, IWorkBook } from 'ts-xlsx';
/**
 * @ignore
 */
@Component({
  selector: 'moh-ag-grid',
  templateUrl: './ag-grid.component.html',
})
export class AgGridComponent implements OnInit {
  columns: ColDef[];
  //rowData: Student[];
  gridOptions: GridOptions;
  rerender: boolean;
  gridApi;
  gridColumnApi;
  _localeText;
  arrayBuffer: any;
  file: File;
  rowData: any[];
  headers: any[];
  //jsonData: any;
  constructor(private userService: TableDataService, private _cdref: ChangeDetectorRef,
    private gridAgService: MohAgGridService, private mohTranslateService: MohTranslateService, private umbracoDataService: UmbracoDataService) {
    this.gridOptions = this.gridAgService.getMohGridOptions();
    this.gridOptions.onGridReady = (params): any => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    const eGridDiv = document.querySelector('.ag-theme-material');
    params.api.sizeColumnsToFit();
    }
  }

  ngOnInit() {

    this.userService.getUser().subscribe((res) => {
      res.forEach(element => {
        element.brithDate = new Date("03/05/1984");
      });
      this.rowData = res;
    });


    this.columns = [
      this.gridAgService.getMohSelectColumn('name', { arrayParams: ["ruthi", "batya", "rivki", "odelia"], editable: true, isPinned: false }),
      this.gridAgService.getMohLinkColumn('email', { translateCode: 'Email_Label', routerLink: "/wizard/address", arrayParams: ["name"] }),
      this.gridAgService.getMohColumn("company.name", { editable: true, translateCode: 'company' }),
      this.gridAgService.getMohLinkColumn('phone', { translateCode: 'tel', matIconName: 'call', routerLink: 'url' }),
      this.gridAgService.getMohDateColumn('brithDate', new colExtraDef({ translateCode: 'birthDate' })),
      this.gridAgService.getMohLinkColumn('next', { translateCode: 'next', matIconName: 'arrow_back_ios', routerLink: "/wizard/personal", arrayParams: ["name"] }),
      //this.gridAgService.getMohColumn('trtr'),
      //this.gridAgService.getMohColumn('trtr1'),
    ];
  }

  /*saveData() {
    var strData = this.gridAgService.getAllData(this.gridApi);
    //this.jsonData = JSON.stringify(strData);
    var FileSaver = require('file-saver');
    var blob = new Blob([JSON.stringify(strData)], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, "ag-grid.txt");
  }
  /*incomingfile(event) {
    this.file = event.target.files[0];
  }

  Upload() {
    let fileReader = new FileReader();
    this.columns = [];
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true}))
      var headers = XLSX.utils.sheet_to_json(worksheet, { raw: true, header: 'A' })[0]
      Object.keys(headers).forEach((k) => {
        this.columns.push(this.gridAgService.getMohColumn(headers[k]))
      });
      this.gridOptions.api.setColumnDefs(this.columns);
      this.rowData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
    }
    fileReader.readAsArrayBuffer(this.file);
  }*/

  
  onCellValueChanged(event) {
    console.log(event) // access the entire event object
    console.log(event.data) // access and print the updated row data
  }


}
