import {Image} from "../Types.ts";
import {Coordinate} from "./Coordinates;ts";
import {Comment} from "./Comment.ts";
export default =
interface LocationInfo {
  Title : string,
  Images : Array<Image>,
  Comments : Array<Comment>,
  Grade : number,
  Description : string,
  Coordinates : Coordinate
}
