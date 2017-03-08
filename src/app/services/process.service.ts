import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {process} from "../models/bll/process";


@Injectable()
export class ProcessesService {

  constructor(private http: Http) { }

  loadProcesses(): Observable<process[]> {
    return this.http.get('/api/processes' )
      .map(res => res.json());
  }

}
