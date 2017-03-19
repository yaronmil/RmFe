import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {process} from "../models/shared/process";


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
  DeleteProcess(process:process):Observable<boolean>{
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.delete(`api/processes/${process.id}` ).map(res=>true);
  }
  UpdateProcess(process:process):Observable<process>{
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.put(`api/processes/${process.id}`,process,options ).map(res=>res.json());
  }


}
