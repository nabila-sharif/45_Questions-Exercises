//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


//function make_shirt(size: string, label:string){

  //  return size + label
//}

//let myFunction = make_shirt("large", " i love TypeScript");

//console.log(myFunction);


//making medium as default


//function make_shirt(label:string, size: string = " medium "){


 //   return size + label
//}

//let myFunction = make_shirt(" i love TypeScript  ");

//console.log(myFunction);


//making shirt of any type

function make_shirt(label:string, size: string ){
    

    return size + label
}

let myFunction = make_shirt("any size", " i love TypeScript  ");

console.log(myFunction);



