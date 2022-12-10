/** Now defining object like this can be confusing 
* here typescript provides a better way of 
* doing this using type alias
* Eg
*/
type Article = {
  name:string;
  count:number;
}


let author: Article = {
  name:"Fransis",
  count:3
}


// Practice

const airplane : Airplane = {
  model: "Airbus A380",
  flightNumber:"A2201",
  timeOfDeparture:new Date(),
  timeOfArrival:new Date(),
  caterer:{
    name:"Special Food Ltd",
    address:"484, Some Street, New York",
    phone:1452125,
   
  },
  
}

type Caterer = {
  name:string;
  address:string;
  phone:number;
}

type Airplane = {
  model : string;
  flightNumber:string;
  timeOfDeparture:Date;
  timeOfArrival:Date;
  caterer:Caterer;
}

console.log(airplane)