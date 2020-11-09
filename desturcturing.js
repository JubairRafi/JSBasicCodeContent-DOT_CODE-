const person ={
    name: 'Paul',
    age:39,
    job: 'Developer'
  }
  //object destructuring in function
  const printName = ({ name })=>{
    console.log(name); //Paul
  }
  printName(person); 
  //we can also store object property in variable like this
  const {name, age} = person; 
  console.log(name,age); //Paul 39