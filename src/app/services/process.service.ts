import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {process} from "../models/bll/process";


@Injectable()
export class ProcessesService {

  constructor(private http: Http) { }

  loadProcesses(): Observable<process[]> {
    return this.http.get('/api/processes' )
      .map(res => res.json());
  }

  createProcess(process:process):Observable<process>{
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post("api/processes", process, options).map(res=>res.json());
  }

}
