// function that calculates the sum of all numbers from 1 to n

function addUpTo(n) {
    let total = 0 
    for(let i = 0; i <= n; i++) {
        total += i
    }
    return total
}

console.log(addUpTo(6))