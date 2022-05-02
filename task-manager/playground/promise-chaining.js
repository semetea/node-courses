require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('626d964f28a4ccf03577d5ec', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch(e => {
    console.log(e)
})