const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    // implemente o código do kata 1 aqui
    let n = []

    for(let i = 1; i <= 25; i++){
        n.push(i)
    }
    return n
}
console.log(kata1())


function kata2() {
    // implemente o código do kata 2 aqui
    let n = []

    for(let i = 25; i >= 1; i--){
        n.push(i)
    }
    return n
}
console.log(kata2())


function kata3() {
    // implemente o código do kata 3 aqui
    let n = []

    for(let i = -1; i >= -25; i--){
        n.push(i)
    }
    return n
}
console.log(kata3())

function kata4() {
    // implemente o código do kata 4 aqui
    let n = []

    for(let i = -25; i <= -1; i++){
        n.push(i)
    }
    return n
}
console.log(kata4())


function kata5() {
    // implemente o código do kata 5 aqui
    let n = []

    for(let i = 25; i >= -25; i--){
        if(i % 2 != 0){
            n.push(i)
        }
    }
    return n
}
console.log(kata5())


function kata6() {
    // implemente o código do kata 6 aqui
    let n = []

    for(let i = 3; i <= 100; i++){
        if(i % 3 === 0){
            n.push(i)
        }
    }
    return n
}
console.log(kata6())


function kata7() {
    // implemente o código do kata 7 aqui
    let n = []

    for(let i = 7; i <= 100; i++){
        if(i % 7 === 0){
            n.push(i)
        }
    }
    return n
}
console.log(kata7())


function kata8() {
    // implemente o código do kata 8 aqui
    let n = []

    for(let i = 100; i >= 0; i--){
        if(i % 3 === 0){
            n.push(i)
        } else if(i % 7 === 0 ){
            n.push(i)
        }
    }
    return n
}
console.log(kata8())


function kata9() {
    // implemente o código do kata 9 aqui
    let n = []

    for(let i = 0; i <= 100; i++){
        if(i % 5 === 0 && i % 2 !== 0){
            n.push(i)
        }
    }
    return n
}
console.log(kata9())


function kata10(x) {
    // implemente o código do kata 10 aqui
    let n = []

    for(let i = 0; i < x.length; i++){
        n.push(x[i])
    }
    return n
}
console.log(kata10(sampleArray))


function kata11(x) {
    // implemente o código do kata 11 aqui
    let n = []

    for(let i = 0; i < x.length; i++){
        if(x[i] % 2 === 0){
            n.push(x[i])
            
        }
    }
    return n
}
console.log(kata11(sampleArray))


function kata12(x) {
    // implemente o código do kata 12 aqui
    let n = []

    for(let i = 0; i < x.length; i++){
        if(x[i] % 2 !== 0){
            n.push(x[i])
            
        }
    }
    return n
}
console.log(kata12(sampleArray))


function kata13(x) {
    // implemente o código do kata 13 aqui
    let n = []

    for(let i = 0; i < x.length; i++){
        if(x[i] % 8 === 0){
            n.push(x[i])
            
        }
    }
    return n
}
console.log(kata13(sampleArray))


function kata14(x) {
    // implemente o código do kata 14 aqui
    let n = []

    for(let i = 0; i < x.length; i++){
        n.push(x[i] * x[i])
    }
    return n
}
console.log(kata14(sampleArray))


function kata15(x) {
    // implemente o código do kata 15 aqui
    let soma = 0

    for(let i = 0; i <= x; i++){
        soma += x
    }
    return soma/2
}
console.log(kata15(20))


function kata16(x) {
    // implemente o código do kata 16 aqui
    let soma = 0
    x = sampleArray

    for(let i = 0; i < x.length; i++){
        soma += x[i]
    }
    return soma
}
console.log(kata16())


function kata17(x) {
    // implemente o código do kata 17 aqui
    // let nMin = Math.min(...x)
    // return nMin
    //[469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    let n = x[0]

    for(let i = 0; i < x.length; i++){
        if(x[i] <= n){
            n = x[i]
        }
    }
    return n
}
console.log(kata17(sampleArray))


function kata18(x) {
    // implemente o código do kata 18 aqui
    // let nMax = Math.max(...x)
    // return nMax
    let n = x[0]

    for(let i = 0; i < x.length; i++){
        if(x[i] >= n){
            n = x[i]
        }
    }
    return n
}
console.log(kata18(sampleArray))


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
