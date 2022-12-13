type Reservation = {
  departureDate:Date;
  returnDate? :Date;
  departingFrom:string;
  destination:string;
}

type Reserve = {
  (
    departureDate:Date,
    returnDate:Date,
    departingFrom:string,
    destination:string
  ):Reservation | never;
  (
    departureDate:Date,
    departingFrom:string,
    destination:string
  ):Reservation | never;
}


export const reserve : Reserve  = (
  departureDate:Date,
  returnDateOrdepartingFrom : Date | string,
  departingFromDestination : string,
  destination?:string
  ) => {
    if(returnDateOrdepartingFrom instanceof Date && destination){
      return {
        departureDate:departureDate,
        returnDate:returnDateOrdepartingFrom,
        departingFrom:departingFromDestination,
        destination:destination
      }
    }
    else if(typeof returnDateOrdepartingFrom === "string"){
      return {
        departureDate:departureDate,
        departingFrom:returnDateOrdepartingFrom,
        destination:departingFromDestination
      }
    }
  throw new Error("Please provide a valid reservation parameter type")
}