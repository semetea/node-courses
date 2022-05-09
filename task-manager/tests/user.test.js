const request = require('supertest')
const app = require('../src/app')

test('Shoudl signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Terry',
        email: 'terry@example.com',
        password: 'MyPass777!'
    }).expect(201)
})