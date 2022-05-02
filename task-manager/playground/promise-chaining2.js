require('../src/db/mongoose')
const Task = require('../src/models/task')

// Promise chaining
// Task.findByIdAndDelete('626d9edadec47995593fa2f7', { completed: false}).then(task => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then(result => {
//     console.log(result)
// }).catch(e => {
//     console.log(e)
// })

// Using async-await
const deleteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id, { completed })
    const count = await Task.countDocuments({ completed })
    return count
}

deleteTaskAndCount('626d9edadec47995593fa2f7', false).then(count => {
    console.log(count)
}).catch(e => {
    console.log(e)
})