import Link from 'next/link'
import Page from '../TipoSeguro/page';
// import { useState} from 'react';
// import { useClient} from 'next/client';

export default function Identificacao() {
    // const [cpf, setCpf] = useState("");
    // const [aviso, setAviso] = useState("");
    // useClient();

    // const enviarCpf = () => {
    //     setAviso("CPF enviado com sucesso. Você pode continuar agora!");
    // }

    return (
        <>
            <h1>Identificação</h1>

            <p>Informe seu CPF:</p>
            {/* <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} id="ColetarCpf" placeholder="Digite aqui"/>
            <button id="EnviarCPF" onClick={enviarCpf}>Enviar</button>  */}
            <input type="text" id="ColetarCpf" placeholder="Digite aqui"/>
            <button id="EnviarCpf">Enviar</button>

            <div>
                <p>Próxima etapa: </p>
                <ul>
                    <li><Link href='/secundaria/TipoSeguro'>Escolha do tipo do seguro</Link></li>
                </ul>
            </div>
        </>
    )
}