// import {Roles} from "../archive/types/enums.type";
// import { intro2  } from "../archive/functions/optionalParameter.function";
// console.log(intro2("John", 24))
// import * as cp from "../archive/functions/customParameter..function"

// console.log(cp.convertAge(cp.person));

/** function overloading */
import { reserve } from "../archive/functions/functionOverlaoding.function";

console.log(reserve(new Date(), new Date(), "New York", "Brazil"));
console.log(reserve(new Date(), "France", "Canada"))
