/**
 * This can be defined as the combination of two types
 * N/B -> an object or variable with a union type 
 * must either have all the properties
 * of one type or all the properties of 
 * the other type or both but can not have 
 * partial properties of both types 
 */

// type Dog = {
//   dogName:string;
//   bark:string;
// }

// type Cat = {
//   catName:string;
//   purrs:string;
// }

// type DogAndCatUnion = Dog | Cat;

// let cat : DogAndCatUnion = {
//   dogName:"Jollof",
//   bark:"fresh"
// }

// Example of union types with primitive types 

type StringAndNumber = string | number;

function testStringAndNumber(a:StringAndNumber, b:StringAndNumber){
  if(typeof a === "number" && typeof b === "number"){
    return a + b
  }
  return a.toString() + b.toString();
}

console.log(testStringAndNumber(5, 6));