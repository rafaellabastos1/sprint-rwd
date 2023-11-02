import Link from 'next/link'

export default function Identificacao() {

    const enviarCpf = () =>{
        alert ("Cpf enviado com sucesso!")
    }

    return (
        <>
            <h1>Identificação</h1>

            <p>Informe seu CPF:</p>
            <input type="text" id="ColetarCpf" placeholder="Digite aqui"/>
            <button id="EnviarCPF" onClick={enviarCpf}>Enviar</button> 

            <p>Próxima etapa: </p>
            <ul>
                <li><Link href=''>Escolha do tipo do seguro</Link></li>
            </ul>
        </>
    )
}