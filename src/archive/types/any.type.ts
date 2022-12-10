/** This is the mother of boolean, string, number, 
 * object, symbol, bigint 
 * it equvalient to the type in javaScript and should
 * be used as last resort when developing in
 * typescript
 */

/** On this example we see that type does not 
 * force us to ensure that we know the type of 
 * number before performing an operation on it 
 */

function MultTwo(number: any){
  return number * 2;
}

console.log(MultTwo(4))