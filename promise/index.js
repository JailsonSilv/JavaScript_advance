/*
*** PROMISE
*
* A promesa de que algo irá acontecer
* Poderá dar certo ou errado
* mas irá acontecer
*/

/*

let aceitar =  true  //true or false

console.log('Pedir uber')
const promessa = new Promise((resolve, reject) => {

    if (aceitar) {
        return resolve("Pedido aceito!")
    }

    return reject("pedido negado!")
})

console.log("Aguardando")

promessa
 .then(result => console.log(result))
 .catch(erro => console.log(erro))
 .finally(() => console.log("finalizado"))

*/ 



// <<<<< Pedindo algo pra sua mãe!! >>>>
let resposta = false  //true of false
console.log("Pediu pra ir brincar na rua.")
//tem uma promessa, 2 condição de sim ou não

const promessa = new Promise((resolve, reject) => {

    if (resposta) {
        return resolve("Sua mãe deixou vc ir")
    }

    return reject("Sua mãe disse que não é pra ir hj")
})

console.log("Aguardando a resposta")

promessa
 .then(resultado => console.log(resultado))
 .catch(err => console.log(err))
 .finally(() => console.log("Ponto final"))
