const array = (...args)=>{ //rest operator
    return args;
  };
  console.log(array(1,2,3,4,5)); //[1,2,3,4,5]
  console.log(array(1,2,3,4)); //[1,2,3,4]
  console.log(array(1,2,3));  //[1,2,3]