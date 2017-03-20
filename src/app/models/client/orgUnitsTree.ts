import {orgUnit} from "../shared/orgUnit";
import {lookup} from "./lookup";
/**
 * Created by Yaron on 3/5/2017.
 */
export interface orgUnitsTree  extends lookup {
  icon:string
  isExpanded:boolean,
  selected:boolean,
  children:orgUnitsTree[]
};
