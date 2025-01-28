let string = "Hello World"
let search = "ell"
let result = ''

//cara manual
for (let i = 0; i < string.length; i++){
    if (string.slice(i, i + search.length) === search){
        i += search.length - 1
    } else {
        result += string[i]
    }
    console.log(string.slice(i, i + search.length))
}

//cara simple
// let result = string.replace(search, "")

console.log(result)