const pokemon = require('./data.js');
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
    difficulty: ["Medium"] //Exercise 3
  }

// Exercise 1
// console.dir(pokemon, { maxArrayLength: null })
// console.log(pokemon[58])

// Exercise 2
// console.log(game)

// Exercise 4
const party = game.party
party.push(pokemon[0])
// console.log(party)

// Exercise 5
party.push(pokemon[65],pokemon[15],pokemon[95])
// console.log(party)

// Exercise 6
// if (game.gyms.difficulty <= 3) then
// (game.gyms.completed = true) //doesnt work
// console.log(game.gyms)
game.gyms[0].completed = true
game.gyms[1].completed = true
game.gyms[2].completed = true
// console.log(game.gyms)

// Exercise 7
party[0].name = "Ivysaur"
party[0].number = 2
// console.log(party)

// Exercise 8
// console.log(party[0].name)
// console.log(party[1].name)
// console.log(party[2].name)
// console.log(party[3].name)

// Exercise 9
// for (let i = 0; i < pokemon.length; i++) {
// if (pokemon[i].starter === true) {
// (console.log(pokemon[i].name))}}

// Exercise 10
game.pokemonObj = ["hi im an object"]
game.party.push(game.pokemonObj)
game.catchPokemon = ['test'];
// console.log(game)

// Exercise 11
let pokeballs = game.items[1].quantity
pokeballcount = game.catchPokemon.length
game.items[1].quantity = pokeballs - pokeballcount
// console.log(game.items[1])

// Exercise 12
game.gyms[3].completed = true
game.gyms[4].completed = true
game.gyms[5].completed = true

// Exercise 13
let gymtally = {
  completed: 0,
  incomplete: 0,
}

for (let num = 0; num < game.gyms.length; num++) {
  if (game.gyms[num].completed === true) 
    {gymtally.completed += 1} else
  {gymtally.incomplete += 1}
}
// console.log(gymtally)

// Exercise 14
partyCount = game.party.length
console.log(partyCount)

// Exercise 15
game.gyms[6].completed = true
game.gyms[7].completed = true

// Exercise 16
console.log(game)