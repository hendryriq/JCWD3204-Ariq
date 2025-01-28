let input = "hello world"
let splitInput = input.split(" ")
let result = []

for(let i = 0; i < splitInput.length; i++){
    splitAgain = splitInput[i].split('')
    capital = splitAgain[0].toUpperCase()
    splitAgain[0] = capital
    result.push(splitAgain.join('')); 
    
}

result = result.join(' ')
console.log(result)