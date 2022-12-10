/** Typescript on its own is intelligent enough to detect 
 * the type of a variable based of the value assign to it 
 * it best practice to allow typescript infer the type of a
 * variable where it can and to explictly define the type 
 * where it cannot.
 * Eg
 */

let val = 90; // Here typescript can infer that its of type number 
let finalval: number ; // Here without explicity defining a type, typsscript 
              // would think this is of type any and that is not 
              // what want so we define a type in this case
              
function valReturn(val: number ):number {
  return val;
}

finalval = valReturn(4); // this works cause value return returns a 
                         // a value.

