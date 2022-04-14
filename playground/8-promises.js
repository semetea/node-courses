const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([7,4,1])
        reject('Things went wrong!!')
        resolve([2, 3, 2])  // 중복되더라도 에러가 안 남
    }, 2000)
})

doWorkPromise.then((result) => {    // goes well
    console.log('Sucess!', result)
}).catch((error) => {
    console.log('Error!', error)
})