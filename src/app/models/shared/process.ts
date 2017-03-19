import {orgUnit} from "./orgUnit";
/**
 * Created by Yaron on 3/5/2017.
 */
export interface process{
  id:number
  name:string
  resp:string
  units:orgUnit[]
  desc:string
  staus:string
  color:string
}
