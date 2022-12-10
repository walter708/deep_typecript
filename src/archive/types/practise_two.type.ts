type Book = {
  title:string;
  pages:number;
  isbn:string;
}

type TypeOfLibrary = 'national' | 'academic' | 'public'



type Member = {
  name:string;
  phone:string;
  [key:string] : string;
}

type Libray = {
  name: string;
  address:string;
  numberOfBooks:number;
  type:TypeOfLibrary;
  books:Book[];
  genres:string[];
  members:Member[];
  
}
const library: Libray = {
  name:"New York Library",
  address:"24 Some Street, New York",
  numberOfBooks:1254,
  type:'national', // 'national', 'academic','public'
  books:[
  {
   title:"Harry Potter",
   pages:756,
   isbn:"9971-5-0210-0",
  },
  {
   title:"Davinci code",
   pages:386,
   isbn:"9971-5-0210-0",
   },
  ],

  genres:["fiction", "history", "computers", "poetry"],

  members:[
    {
     name:"john Doe",
     phone:"+166984548",
    },
   
    {
      name:"Mark Doe", // Name is Mandatory
      phone:"+166984548", // Phone is Mandatory
      email:"mark@email.com", // Can have additinal optional fields
      user:"hfdhjhffd",
      
     },
  ]
}