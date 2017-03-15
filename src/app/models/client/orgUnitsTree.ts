import {orgUnit} from "../shared/orgUnit";
/**
 * Created by Yaron on 3/5/2017.
 */
export interface orgUnitsTree extends orgUnit{
  isExpanded:boolean,
  selected:boolean,
  children:orgUnitsTree[]
};
