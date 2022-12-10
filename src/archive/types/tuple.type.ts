/** a tuple is a kind of where the type of each element 
 * is defined during the type definition
 * N/B - elements of a tuple can be of any type but must be defined during 
 * the type definition 
 * Eg
 */

type ListOfStudents = [number, boolean, ...string[]]

let passingStudent : ListOfStudents = [4, true, "mary", "john"];
let failingStudent : ListOfStudents = [4, false, "phantom", "villa"];

