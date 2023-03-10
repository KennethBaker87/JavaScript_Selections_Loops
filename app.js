console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let number = 1; number <= 100; number++){
    if (number % 2 == 0){
        continue
    }
    else{
        console.log(number)
    }
    
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let number = 1; number <= 100; number ++){
    if (number % 3 == 0 && number % 5 == 0){
        console.log(`${number} fizz buzz`)
        continue
    }
    
    else if (number % 5 == 0){
        console.log(`${number} buzz`)
        continue
    }
    else if (number % 3 == 0){
        console.log (`${number} fizz`)
        continue
    }
    console.log(number)    
    
}
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
console.log("Part 1")
let number = 1
console.log(`while`)
while (number <= 100){
    if(number % 2 == 0){
        number++
    }
    else {
        console.log(number)
        number++
    }

}

{
    console.log(`do while`)
    let number = 1
    do {
        if(number % 2 != 0){  
            
            console.log(number)
            
        }
        number++
        
        
    }
    while (number <= 100)
}

{console.log("Part 2")
    let number = 1
    while(number <100){
        if (number % 3 == 0 && number % 5 == 0){
            console.log(`${number} fizz buzz`)
            number++
            
        }
        
        else if (number % 5 == 0){
            console.log(`${number} buzz`)
            number++
            
        }
        else if (number % 3 == 0){
            console.log (`${number} fizz`)
            number++
            
        }
        else{
        console.log(number)
        }
        number++
    }
}

{
    let number = 1
    do {
        if (number % 3 == 0 && number % 5 == 0){
            console.log(`${number} fizz buzz`)
            
            
        }
        
        else if (number % 5 == 0){
            console.log(`${number} buzz`)
            
            
        }
        else if (number % 3 == 0){
            console.log (`${number} fizz`)
            
            
        }
        else{
            console.log(number)}
        number++

        
    }
    while(number <=100)
    
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

let isFound = false;
for(let i = 0; i <= n; i++){
    if(i == value){
        console.log("Found Value!");
        isFound = true;
        break;
    }
    else{
        isFound = false;
    }
    if(isFound == false){
        console.log("Did not find value");
    
    }
}
// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let i = start; i <= end; i++){
    if (i % fizzDivisor === 0 && i % buzzDivisor === 0){
        console.log(`${i} FIZZBUZZ`);
    }
    else if (i % fizzDivisor == 0){
        console.log(`${i} FIZZ`);
    }
    else if (i % buzzDivisor == 0){
        console.log(`${i} BUZZ`);
    }
    else {
        console.log(`${i}`);
    }
}