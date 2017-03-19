/**
 * Created by Yaron on 3/15/2017.
 */
import { Pipe, PipeTransform } from '@angular/core';
import {user} from "../models/shared/user";
import {orgUnit} from "../models/shared/orgUnit";

@Pipe({name: 'orgunits-pipe'})
export class orgUnitsPipe implements PipeTransform {
  transform(orgUnits: orgUnit[] ): string {
    return orgUnits.map(ou=>ou.name).join(",");

  }
}
