require('../src/db/mongoose')
const { update } = require('../src/models/user')
const User = require('../src/models/user')

// Promise chaining
// User.findByIdAndUpdate('626d964f28a4ccf03577d5ec', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch(e => {
//     console.log(e)
// })

// Using async and await
const updateAgeCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeCount('626d964f28a4ccf03577d5ec', 2).then(count => {
    console.log(count)
}).catch(e => {
    console.log(e)
})