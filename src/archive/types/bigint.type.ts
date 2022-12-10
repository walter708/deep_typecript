/**
 * BigInt -> This can be created using the 
 * constructor, it can also be created using the 
 * literal 
 * operation which are posible in number is also 
 * possible in bigint except 
 * -> bigint can not hold a decimal number
 * -> you cannot use the math object with bigint
 * 
 * Why Bigint well, the need for bigint arise because when you 
 * want to use number that are above (2^53) which is the max safe Integer
 * in javaScript you can not test is show below
 * hence the need for bigInt 
 * 
 */

let num : number = Number.MAX_SAFE_INTEGER;
let numPlueOne: number = num + 1;
let numPlueTwo: number = num + 2;
console.log(num); // 2^53
console.log(numPlueOne); // same value as numPlueTwo
console.log(numPlueTwo); // same value as numPlueOne
console.log(numPlueTwo == numPlueOne); // true

let bigInt : bigint = 9007199254740991n;
let bigIntPlusOne : bigint = BigInt(bigInt + 1n);
let bigIntPlusTwo : bigint = BigInt(bigInt + 2n);
console.log(bigInt); // same value as numPlueTwo
console.log(bigIntPlusOne); // not same value as numPlueOne
console.log(bigIntPlusTwo); // not same value as numPlueOne
console.log(bigIntPlusOne == bigIntPlusTwo); // false