const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1(x) {
    // implemente o código do kata 1 aqui
    let n = []

    for(let i = 1; i <= x; i++){
        n.push(i)
    }
    return n
}
console.log(kata1(25))


function kata2(x) {
    // implemente o código do kata 2 aqui
    let n = []

    for(let i = 25; i >= x; i--){
        n.push(i)
    }
    return n
}
console.log(kata2(1))


function kata3(x) {
    // implemente o código do kata 3 aqui
    let n = []

    for(let i = -1; i >= x; i--){
        n.push(i)
    }
    return n
}
console.log(kata3(-25))

function kata4(x) {
    // implemente o código do kata 4 aqui
    let n = []

    for(let i = -25; i <= x; i++){
        n.push(i)
    }
    return n
}
console.log(kata4(-1))


function kata5(x) {
    // implemente o código do kata 5 aqui
    let n = []

    for(let i = 25; i >= x; i--){
        if(i % 2 != 0){
            n.push(i)
        }
    }
    return n
}
console.log(kata5(-25))


function kata6(x) {
    // implemente o código do kata 6 aqui
    let n = []

    for(let i = 0; i <= x; i++){
        if(i % 3 === 0){
            n.push(i)
        }
    }
    return n
}
console.log(kata6(100))


function kata7(x) {
    // implemente o código do kata 7 aqui
    let n = []

    for(let i = 0; i <= x; i++){
        if(i % 7 === 0){
            n.push(i)
        }
    }
    return n
}
console.log(kata7(100))


function kata8(x) {
    // implemente o código do kata 8 aqui
    let n = []

    for(let i = 0; i <= x; i++){
        if(i % 3 === 0 && i % 7 === 0){
            n.push(i)
        }
    }
    return n
}
console.log(kata8(100))


function kata9(x) {
    // implemente o código do kata 9 aqui
    let n = []

    for(let i = 0; i <= x; i++){
        if(i % 5 === 0 && i % 2 !== 0){
            n.push(i)
        }
    }
    return n
}
console.log(kata9(100))


function kata10(x) {
    // implemente o código do kata 10 aqui
    return sampleArray
}
console.log(kata10())


function kata11(x) {
    // implemente o código do kata 11 aqui
    let n = []
    x = sampleArray

    for(let i = 0; i < x.length; i++){
        if(x[i] % 2 === 0){
            n.push(x[i])
            
        }
    }
    return n
}
console.log(kata11())


function kata12(x) {
    // implemente o código do kata 12 aqui
    let n = []
    x = sampleArray

    for(let i = 0; i < x.length; i++){
        if(x[i] % 2 !== 0){
            n.push(x[i])
            
        }
    }
    return n
}
console.log(kata12())


function kata13(x) {
    // implemente o código do kata 13 aqui
    let n = []
    x = sampleArray

    for(let i = 0; i < x.length; i++){
        if(x[i] % 8 === 0){
            n.push(x[i])
            
        }
    }
    return n
}
console.log(kata13())


function kata14() {
    // implemente o código do kata 14 aqui
    let n = []
    x = sampleArray

    for(let i = 0; i < x.length; i++){
        n.push(x[i] * x[i])
    }
    return n
}
console.log(kata14())


function kata15(x) {
    // implemente o código do kata 15 aqui
    let soma = 0

    for(let i = 0; i <= x; i++){
        soma += x
    }
    return soma
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
    x = sampleArray
    let nMin = Math.min(...x)
    return nMin
}
console.log(kata17())


function kata18(x) {
    // implemente o código do kata 18 aqui
    x = sampleArray
    let nMax = Math.max(...x)
    return nMax
}
console.log(kata18())


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
