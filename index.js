const express = require('express')
const bodyParser = require('body-parser') 
const app = express()

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


  

const PORT = 3001
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})