import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './students';

/**
 * @ignore
 */
@Injectable()
export class TableDataService {
  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';
  private students: Student[];
  private content : HttpParams;
  constructor(private http: HttpClient) { }

  getUser(): Observable<Student[]> {
    return this.http.get<Student[]>(this.serviceUrl);
  }

  getUsersList(): Student[] {
    this.getUser().subscribe(res => this.students = res);
    return this.students;
  }
}

