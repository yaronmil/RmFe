/**
 * Created by Yaron on 3/15/2017.
 */
import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {user} from "../models/shared/user";


@Injectable()
export class UsersService {
  constructor(private http: Http) { }

  loadUsers(): Observable<user[]> {
    return this.http.get('/api/users' )
      .map(res => res.json());
  }
}
