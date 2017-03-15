import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {orgUnit} from "../models/shared/orgUnit";


@Injectable()
export class OrgUnitsService {

  constructor(private http: Http) { }

  loadOrgUnits(): Observable<orgUnit[]> {
    return this.http.get('/api/orgUnits' )
      .map(res => res.json()).do(data=>console.log());
  }

}
