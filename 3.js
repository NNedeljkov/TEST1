{
    let K = 3
    let N = 35
    let zbir = 0
    let proizvod = 1
    let brojac = 0

    for(let x = K; x <= N; x++){
        if(x % 3 == 0){
            zbir += x
            brojac++
        }
    }
    console.log(`Zbir: ${zbir}`)
    for(let x = K; x <= N; x++){
        if(x % 3 !== 0 && x % 7 == 0){
            proizvod *= x
            brojac++
        }
    }
    console.log(`Proizvod: ${proizvod}`)
    

}