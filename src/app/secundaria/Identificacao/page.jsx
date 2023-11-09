"use client";
import { useState } from 'react';
import Link from 'next/link'

export default function Identificacao() {
    useState

    const [cpf, setCpf] = useState("");
    const [aviso, setAviso] = useState("");

    const enviarCpf = () => {
        setAviso("CPF enviado com sucesso. Você pode continuar agora!");
    }

    return (
        <>
            <h1>Identificação</h1>

            <p>Informe seu CPF:</p>
            <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} id="ColetarCpf" placeholder="Digite aqui"/>
            <button id="EnviarCPF" onClick={enviarCpf}>Enviar</button> 

            <p>Próxima etapa: </p>
            <ul>
                <li><Link href='/secundaria/tipo-seguro'>Escolha do tipo do seguro</Link></li>
            </ul>
        </>
    )
}