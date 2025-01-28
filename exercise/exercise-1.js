let input = 9
let result = []

for (let i = 1; i <= 10; i++){
    n1 = input
    n2 = i
    str = " x "
    row = n1 + str + n2
    result.push(row);
}

console.log(result.join("\n"))