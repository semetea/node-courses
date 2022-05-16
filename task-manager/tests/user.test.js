const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: 'Terry',
    email: 'terry@example.com',
    password: '56what!!'
}

beforeEach(async () => {
    await User.deleteMany()
    const user = new User(userOne)
    await user.save()
})

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Andrew',
        email: "andrew@example.com",
        password: "MyPass777!"
    }).expect(201)
})

test('Should login existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('Should not login nonexistent user', async () => {
    await request(app).post('/users/login').send({
        email: 'mike@example.com',
        password: 'Mypassword!'
    }).expect(400)
})
