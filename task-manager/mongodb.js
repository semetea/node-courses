// CRUD create read update delete

// const mongodb = require('mongodb')  // mongoDB import
// const MongoClient = mongodb.MongoClient // mongoDB clinet
// const ObjectID = mongodb.ObjectId

const {MongoClient, ObjectID, ObjectId } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'   // 다운로드 받은 서버 IP
const databaseName = 'task-manager' // DB 이름

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    const updatePromise = db.collection('users').updateOne({
        _id: new ObjectId('62569635bbd27e8038262454') 
    }, {
        $inc: {
            age: 1
        }
    })

    updatePromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    

})