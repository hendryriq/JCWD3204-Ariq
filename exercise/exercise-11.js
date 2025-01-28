let inputText = "An apple a day keeps the doctor away";
let replaced = ''

for (let i = 0; i < inputText.length; i++ ){
    if(inputText[i].toLowerCase() === 'a'){
        replaced += "*"
    } else{
        replaced += inputText[i]
    }
}

console.log(replaced);
