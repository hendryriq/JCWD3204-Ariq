let input = "madam"
let splitInput = input.split('')
let reverseInput = splitInput.reverse()
let resultReverse = reverseInput.join('')

if (resultReverse === input){
    console.log(input, "-> merupakan kata palindrome")
}else{
    console.log(input, "-> bukan kata palindrome")

}