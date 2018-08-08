const faker = require('faker')
const fs = require('fs')

const data = []

for (let id = 0; id < 1000000; id++) {
  data.push({
    id,
    name: faker.name.firstName(),
    location: faker.address.city(),
    description: faker.random.words(),
  })
}

fs.writeFile('public/data.json', JSON.stringify(data), 'utf8')
