import {useState, useEffect} from 'react'

function ApiTeste() {

    //fetch -> api do navegador -> requisições http (get, put, pacth, delete, post) -> axios
    //promisses -> async/await

    //useEffect()
        // array de dependencias 
            // [] -> vai rodar APENAS uma vez -> quando o componente/pagina for carregado
            // [state] -> toda vez que esse state MUDAR DE VALOR -> o código dentro do useEffect roda novamente.


    useEffect(() => {}, [])


    return (
        <div>
            <h1>Aqui é a página que vamos mostrar a nossa API</h1>
        </div>
    )
}

export default ApiTeste