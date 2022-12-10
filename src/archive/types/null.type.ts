/** This represent varaible or value that javascript has not been able to 
 * compute and ran into an error 
 * 
 */
 let k = document.getElementById("k")
 // So for the above definition typescript would 
 // infer that the type of k is either null or HTMLElement and 
 // if we want to enforce typescript to see it as HTMLElement we use 
 // the ! at he end of the expression 
 // but its better we leave it as it is and then check whether its 
 // not null when we want to perform operation on it.
// console.log(k) // This would return null as
                  // javaScript ran into an error computing this.

