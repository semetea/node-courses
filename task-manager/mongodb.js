// CRUD create read update delete

// const mongodb = require('mongodb')  // mongoDB import
// const MongoClient = mongodb.MongoClient // mongoDB clinet
// const ObjectID = mongodb.ObjectId

const {MongoClient, ObjectId } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'   // 다운로드 받은 서버 IP
const databaseName = 'task-manager' // DB 이름

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    db.collection('users').findOne({ _id: new ObjectId('62569635bbd27e8038262454') }, (error, user) => {
        if(error) {
            return console.log('Unable to fetch')
        }

        console.log(user)
    })

    db.collection('users').find({ age: 28 }).toArray((error, users) => {
        console.log(users)
    })

    db.collection('users').find({ age: 28 }).count((error, count) => {
        console.log(count)
    })

    db.collection('tasks').findOne({ _id: new ObjectId('625697b7109e21f9a4106523') }, (error, task) => {
        console.log(task)
    })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    const updatePromise = db.collection('users').updateOne({
        _id: new ObjectId('62569635bbd27e8038262454') 
    }, {
        $set: {
            age: 26
        }
    })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').updateMany({ completed: false }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('users').deleteMany({
        age: 28 
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('tasks').deleteOne({
        description: 'Clean the house' 
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    

})