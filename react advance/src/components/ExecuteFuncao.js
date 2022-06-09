const ExecuteFuncao = ( {myFunction}) => {
  return (
    <>
        <h3>Função como prop</h3>
        <button onClick={myFunction}>Clique aqui para executar a função !</button>
    </>
  )
}

export default ExecuteFuncao