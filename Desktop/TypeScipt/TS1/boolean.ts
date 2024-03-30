var imynameSubham:boolean = true
var isDone:boolean = true
var hasStarted:boolean = false

const isEven = (a:number):boolean => {
    return a%2 === 0
}

const isDivisible = (b:number):boolean => {
    return b%4 === 0 && b%8 === 0
}

var nextnumber:bigint =9007199254740991n
console.log(nextnumber)  
 var anotherbigint = BigInt(9007199254740991)

 let sum1:bigint = nextnumber+anotherbigint


console.log(isEven(6),isDivisible(16),sum1)