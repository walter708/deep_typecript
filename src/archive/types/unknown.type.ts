/** The unknow type behaves as any 
 * type with the difference that 
 * typescript will force you to 
 * ensure you know the type before 
 * performing operation on that variable 
 * Eg
 */

function MultTwoUn(number: unknown){
  // with this check in place typscript 
  // allow operation on the variable.
  if(typeof number === "number")
    return number * 2;
  return "please enter a valid number"
}

console.log("number:"+ MultTwoUn(4));