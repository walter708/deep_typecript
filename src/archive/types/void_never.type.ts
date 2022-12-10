/** The never type is asigned to a function that never completes 
 *  The void type is asigned to function that does not return anything
 */
//  Eg of never 
function err(): never{
  throw new Error("function terminate")
}