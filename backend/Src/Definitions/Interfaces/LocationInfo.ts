import {Image} from "../Types";
import Coordinate from "./Coordinates";
import Comment from "./Comment";
export default interface LocationInfo {
  title : string,
  images : Array<Image>,
  comments : Array<Comment>,
  grade : number,
  description : string,
  coordinates : Coordinate
}
