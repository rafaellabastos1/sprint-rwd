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

            <p><b><Link href=''>Próxima etapa: </Link></b>escolha do tipo do seguro</p>
        </>
    )
}