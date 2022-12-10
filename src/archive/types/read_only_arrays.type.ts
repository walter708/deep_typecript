/** There are times you only want to read or copy an array 
 * well typescript provides a read_only array, as the name 
 * implies you can only read from the array, but you can not 
 * modify it 
 */

let a : readonly number[] = [1, 3, 4];
 
// a.push(10)  // This will throw an error because array is read-only

// We also have read-only tuple and they are defined in this manner 

type Pupil = readonly [string, string, number];
let personOne : Pupil = ["obi", "john", 1];
// personOne[0] = "Ada"  // This will throw an error.

//  Readonly type can also be defined as 
type A = Readonly<String[]>;