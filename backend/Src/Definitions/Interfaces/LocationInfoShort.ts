import {Image} from "../Types"
import Coordinate from "./Coordinates"
export default interface LocationInfoShort {
  title : string,
  image?: Image,
  coordinates : Coordinate,
  grade : number
};
