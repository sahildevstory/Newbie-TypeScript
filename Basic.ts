// const x: number = 4;
// console.log(x);


// let Name = ((a:string, b:string) => {
// console.log('====================================');
// console.log(a+b);
// console.log('====================================');
// })

// Name("Hello", "World")



//Return  true or false if user is 18+


// const checkAge = ((Age:number):boolean => {
//     if(Age >= 18){
//         console.log('====================================');
//         console.log('You are 18+ years old');
//         console.log('====================================');
//         return true;
//     }else{
//         console.log('====================================');
//         console.log('You are not 18+ years old');
//         console.log('====================================');
//         return false;
//     }
// })


// checkAge(20)

//Add to numnbers

// function sum (a:number,b:number):number{
//     return a+b
// }

// const value = sum(2,3)
// console.log('====================================');
// console.log(value);
// console.log('====================================');


///Interface we use interface to define the structure of an object and reduce dry rule

interface Person{
    firstName: string,
    lastName:string,
    age:number,
    email?: string, //? means optional
    isAdult:boolean
}

const isLegal = ((Person:Person) => {
return `Hello ${Person.firstName} ${Person.lastName}, you are $Person.age} years old and you are ${Person.isAdult ? 'an adult' : 'not an adult'}`
})

const printing = isLegal({ firstName: "Sahil",
    lastName:"Khan",
    age:12,
    isAdult: false});
console.log(printing);