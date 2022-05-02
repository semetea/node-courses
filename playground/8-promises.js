// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve([7,4,1])
//         reject('Things went wrong!!')
//         resolve([2, 3, 2])  // 중복되더라도 에러가 안 남
//     }, 2000)
// })

// doWorkPromise.then((result) => {    // goes well
//     console.log('Sucess!', result)
// }).catch((error) => {
//     console.log('Error!', error)
// })

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(1, 2).then((sum) => {   // too complex
//     console.log(sum)

//     add(sum, 5).then(sum2 => {
//         console.log(sum2)
//     }).catch(e => {
//         console.log(e)
//     })

// }).catch(e => {
//     console.log(e)
// })

add(1, 1).then((sum) => {   // Promise chaining
    console.log(sum)
    return add(sum, 4)
}).then(sum2 => {
    console.log(sum2)
}).catch(e => {
    console.log(e)
})