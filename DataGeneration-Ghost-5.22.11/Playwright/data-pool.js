const { faker } = require('@faker-js/faker');

function createProfileDataPool(size) {
  const data = new Array(size).fill(undefined);
  return data.map(() => ({
    empty: '',
    name: faker.name.firstName(),
    nameTooLong: faker.random.alpha(200),
    email: faker.internet.email(),
    emailInvalid: faker.lorem.sentence(),
    url: faker.internet.url(),
    urlInvalid: faker.lorem.sentence(),
    bio: faker.lorem.sentence(),
    bioTooLong: faker.random.alpha(300),
    oldPasswordIncorrect: faker.internet.password(),
    oldPasswordInsecure: '1234567890',
  }));
}

function createPageDataPool(size) {
  const data = new Array(size).fill(undefined);
  return data.map(() => ({
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraph(),
    url: faker.random.alpha(10),
    excerpt: faker.lorem.sentence(),
    future: faker.date.future().toISOString().split('T')[0],
  }));
}

module.exports = { createProfileDataPool, createPageDataPool };
