const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function calculate() {
    rl.question('Enter the first number: ', (num1) => {
        rl.question('Enter the second number: ', (num2) => {
            rl.question('Enter the operation (+, -, *, /): ', (operation) => {
                let result
                num1 = parseFloat(num1)
                num2 = parseFloat(num2)

                switch (operation) {
                    case '+':
                        result = num1 + num2
                        break
                    case '-':
                        result = num1 - num2
                        break
                    case '*':
                        result = num1 * num2
                        break
                    case '/':
                        result = (num2 === 0) ? 'Cannot divide by zero' : num1 / num2
                        break
                    default:
                        result = 'Invalid operation'
                }
                console.log(`Result: ${result}`)
                rl.close()
            })
        })
    })
}
calculate()
