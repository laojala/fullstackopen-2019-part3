const express = require('express')
const bodyParser = require('body-parser') 
const morgan = require('morgan')
const cors = require('cors')

const app = express()


app.use(express.static('build'))
app.use(cors())

morgan.token('body', function (req, res) { return JSON.stringify(req.body) });
app.use(morgan(':method :url :status - :body'));

let persons = [
    {
        name: "Äksy O'Brian",
        number: "040-123456",
        id: 1
    },
    {
        name: 'Seke Äksyläinen',
        number: '050-123123',
        id: 2
    },
    {
        name: "Karo O'Brian-Karoliininen",
        number: "060-1234",
        id: 3
    },
    {
        name: "Sekeliina Kukkonen",
        number: "070-231",
        id: 4
    },
]
  
app.use(bodyParser.json())

app.get('/api/persons', (req, res) => {
  
    res.json(persons)
  })

app.get('/info', (req, res) => {
    const len = persons.length
    const date = new Date()
    res.send(`<div>Phone book has ${len} persons<div>${date}<div>`)
  })

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
  
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
  })


app.post('/api/persons', (request, response) => {
    const body = request.body
    
    if (body.name === undefined || body.name === "") 
      return response.status(400).json({ error: 'Name is missing' })
    
    if (body.number === undefined || body.number === "") 
        return response.status(400).json({ error: 'Number is missing' })
      
    if (persons.some(person => person.number === body.number))
        return response.status(400).json({ error: 'Number is already in the phone book' })

    const person = {
      name: body.name,
      number: body.number,
      id: Math.floor(Math.random() * Math.floor(10000000000))
    }
  
    persons = persons.concat(person)
  
    response.json(person)
  })
  
 
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})