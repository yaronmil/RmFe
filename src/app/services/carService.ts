
import {Car} from "../models/car";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class CarService {

  constructor(private http: Http) {}

  getCarsSmall() {
   /* return this.http.get('/showcase/resources/data/cars-small.json')
      .toPromise()
      .then(res => <Car[]> res.json().data)
      .then(data => { return data; });*/
  }
}/**
 * Created by Yaron on 3/2/2017.
 */
