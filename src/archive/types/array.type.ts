/** typescript can also infer type for array when values is defined  */
let arr = [1, 2, 3];
let arrStr = ["a", "b", "c"];
let arrMix : (string | number)[] = ["a", 1];

// Arrays can also be defined as 
let arrOne : Array<number> = [1,3,4]