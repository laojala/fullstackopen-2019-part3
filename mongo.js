const mongoose = require('mongoose')

if ( process.argv.length < 3 ) {
  console.log('give password as argument')
  process.exit(1)
}


const password = process.argv[2]
const newName = process.argv[3]
const newNumber = process.argv[4]

const url = `mongodb+srv://fullstack_course:${password}@cluster0-u0piz.mongodb.net/phonebook_app?retryWrites=true`

if (password) {

  var connection = mongoose.connect(url, { useNewUrlParser: true })
  
  const personSchema = new mongoose.Schema({
    name: String,
    number: String,
  })
  
  const Person = mongoose.model('Person', personSchema)

  if (newName && newNumber) {
  
    const person = new Person({
      name: newName,
      number: newNumber
    })

    person.save().then(response => {
      console.log(`person ${newName} and number ${newNumber} added to the phone book`)
      mongoose.connection.close();
    })
  }
  
  else {
    Person.find({})
    .then(result => {
      result.forEach(person => {
        console.log(person)
      })
    mongoose.connection.close()
    })
  }
 
}














  