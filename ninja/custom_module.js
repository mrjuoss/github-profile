let events = require('events')

let util = require('util')

let Person = function(name) {
  this.name = name
}

util.inherits(Person, events.EventEmitter)

let james = new Person('james')
let mary = new Person('mary')
let ryan = new Person('ryan')

let people = [james, mary, ryan]

people.forEach(function(person) {
  person.on('speak', function(message) {
    console.log(person.name + ' said : ' + message)
  })
})


james.emit('speak', 'hey dudes')
mary.emit('speak', 'I want to eat')
/*
let myEmitter = new events.EventEmitter()

myEmitter.on('someEvent', (message) => {
  console.log(message)
})

myEmitter.emit('someEvent', 'The event was emitted')
*/
