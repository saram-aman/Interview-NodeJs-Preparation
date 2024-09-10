const express = require('express')
const app = express()

app.use(express.json())

function calculate_and_response(req, res, operator) {
    let { arg1, arg2 } = req.body
    try {
         arg1 = parseFloat(arg1)
         arg2 = parseFloat(arg2)

         if(isNaN(arg1) || isNaN(arg2)) throw new Error('Invalid numbers!')
         let result
         switch(operator) {
             case 'add':
                 result = arg1 + arg2
                 break
             case 'minus':
                 result = arg1 - arg2
                 break
             case 'multiply':
                 result = arg1 * arg2
                 break
             case 'divide':
                 if (arg2 === 0) return res.status(400).json({ error: "Cannot divide by zero!"})
                 result = arg1 / arg2
                 break
             default:
                 throw new Error('Invalid operator provided!')
         }
         res.status(200).json({result})
    } catch (err) {
         res.status(500).json({ error: err.message })
    }
}

app.post('/add', (req, res) => calculate_and_response(req, res, 'add'))
app.post('/minus', (req, res) => calculate_and_response(req, res, 'minus'))
app.post('/multiply', (req, res) => calculate_and_response(req, res, 'multiply'))
app.post('/divide', (req, res) => calculate_and_response(req, res, 'divide'))

app.listen(4000, () => {
    console.log('Application is running on port 4000')
})