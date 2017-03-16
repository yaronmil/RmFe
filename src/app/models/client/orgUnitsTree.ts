import {orgUnit} from "../shared/orgUnit";
/**
 * Created by Yaron on 3/5/2017.
 */
export interface orgUnitsTree    {
  id:number,
  name:string

  icon:string
  isExpanded:boolean,
  selected:boolean,
  children:orgUnitsTree[]
};
