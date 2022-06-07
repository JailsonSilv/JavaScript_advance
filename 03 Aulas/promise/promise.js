// async/await
/* 
    O async await vai permitir que vc escreva código baseado em promises como se fosse síncrono de uma maneira mais confortá vel pra mim escrever e mais legível e fácil de comprender  
*/

let page = 1

const getPosts = async () => {
    try {
        const response = await fetch(`https://api.github.com/users/JailsonSilv/repos`)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    
}

getPosts()
