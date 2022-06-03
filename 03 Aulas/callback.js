// Funções aceitam qualquer tipo de dado como argumento
function imprimirDado(dado) {
    console.log("antes")
    console.log(dado())
}


imprimirDado( () => {
    return "Oii...."
})