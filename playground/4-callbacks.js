// setTimeout(()=> {
//     console.log('Two seconds are up')
// }, 2000)

// const names = ['Terry', 'Jen', 'Jess']
// const shortNames = names.filter((name)=> {
//     return name.length <= 4
// })

const geocode = (address, callback) => {
    setTimeout(()=>{
        const data = {
            latitude: 0,
            longtitude: 0
        }
    
        callback(data)
    }, 2000)
}

geocode('Seoul',(data)=>{
    console.log(data)
    
})


// setTimeout(()=> {
//     console.log('2 seconds')
// }, 2000)


// const add = (a,b,callback) => {
//     setTimeout(()=> {
//         callback(a+b)
//     }, 2000)
// }
// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })


