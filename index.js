const readline = require('readline-sync');
let input = readline.question('Enter your regex: ')
let spacing = readline.keyInYN('Would you like alphanumeric characters to be split by \\W* : ')
let whiteSpace = readline.keyInYN('Would you like white space to be replaced with \\W* : ')

let result = input.split('');
result = result.filter((e, i) => e != result[i - 1]).join('')

if (spacing) {
    result = result.split('').map((e, i) => {
        if (e.match(/[a-z]/i) && (result[i + 1] || '-').match(/[a-z]/i)) {
            return `${e}\\W*`
        }
        return e;
    }).join('')
}

// Automating character possibilities
result = result.replace(/(?<=[^!il1o0a4e3\W])/gmi, '+')
result = result.replace(/[!il1]+/gi, '[il*1!|]+')
result = result.replace(/[o0]+/gi, '[o0]+')
result = result.replace(/[a4e3]+/gi, '[a4e3]+')

if (whiteSpace) result = result.replace(/ /g, '\\W*')

// Correcting errors
result = result.replace(/\+\*/gi, '*')
result = result.replace(/\++/gi, '+')

console.log('\nComplete RegExp : ' + result)
