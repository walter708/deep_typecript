export function intro2(name:string, age:number, country?:string) : string {
  let val : string = `My name is ${name} and I am ${age} years old`
  if(country !== undefined ){
    return `${val} and I from ${country}`;
  }
  return val;
}