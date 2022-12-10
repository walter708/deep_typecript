/** index signature provides solution to the problem 
 * where do not know exactly the names of our property we 
 * want to have in our  
 * but we do know the types each of these properties
 * Eg
 */

type AirplaneTwo = {
  name:string;
  departureDate:string;
  arrivalDate:string;
  to:string;
  from:string;
  seats:{
    // You can add properties which you do know their name 
    // but they must conform to the key type and the value type
    // orderDetails:number; This will throw an error as it does not conform
    [key:string]:string;
  };
}

let airplaneTwo : AirplaneTwo ={
  name:"231w",
  departureDate:"12/12/22",
  arrivalDate:"12/12/23",
  to:"JFK",
  from:"YYC",
  seats:{
    
    "shhs":"hsjhf",
  }
  
}