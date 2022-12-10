/** Intersection -> an object or varriable that has an intersection type 
 * takes must have the properties that are common between the two types 
 * that form the intersection and the properties that are unique between 
 * the two types that form the intersection.
 */

type Cat = {
  name: string;
  purre:boolean;
  color:string;
}

type Dog ={
  name:string;
  bark:string;
  color:string;
}

type DogAndCatIntersection = Dog & Cat;

let catAndDog : DogAndCatIntersection= {
  name:"Mark",
  purre:true,
  color:"white",
  bark:"Woof",
}