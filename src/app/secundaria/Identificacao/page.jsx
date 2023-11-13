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
            <h1 className='subtitulo'>&nbsp;&nbsp;TechnoBike</h1>

            <h2>Identificação</h2>

            <p className='textoIdentificacao'>&nbsp;&nbsp;Informe seu CPF:</p>
            <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} id="ColetarCpf" placeholder="Digite aqui"/>
            <button id="EnviarCPF" onClick={enviarCpf}>Enviar</button> 

            {aviso && (
                <div>
                    <p>{aviso}</p>
                    <h3>Próxima etapa: </h3>
                    <div className='caixaIdentificacao'>
                        <Link href='/secundaria/tipo-seguro'>&nbsp;&nbsp;Escolha do tipo do seguro</Link>
                    </div>
                </div>
            )}
        </>
    )
}

