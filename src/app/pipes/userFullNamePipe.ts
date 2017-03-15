/**
 * Created by Yaron on 3/15/2017.
 */
import { Pipe, PipeTransform } from '@angular/core';
import {user} from "../models/shared/user";

@Pipe({name: 'userFullNamePipe'})
export class userFullNamePipe implements PipeTransform {
  transform(user: user ): string {
    return user?(user.firstName+" "+user.lastName):''
  }
}
