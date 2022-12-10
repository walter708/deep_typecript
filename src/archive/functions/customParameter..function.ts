enum AgeUnit{
  years = "years",
  months = "months"
}

type Person = {
  name: string,
  age: number, 
  ageUnit: AgeUnit 
  country:string 
  greet(greeting:string): string
}

export let person : Person ={
 name: "Micheal",
 age: 23,
 ageUnit:AgeUnit.years,
 country:"Costrica",
 greet:(greeting:string) => { return `${greeting} ${person.name}`}
}
console.log(person.greet("Good morning"))

export function convertAge(person:Person): Person{
  person.age = person.age * 12;
  person.ageUnit = AgeUnit.months;
  return person;
}