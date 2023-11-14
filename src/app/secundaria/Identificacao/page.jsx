"use client";
import { useState } from 'react';
import Link from 'next/link';

// Componente funcional Identificacao
export default function Identificacao() {
    // Declara e inicializa variáveis de estado usando o hook useState
    const [cpf, setCpf] = useState("");
    const [aviso, setAviso] = useState("");

    // Função para lidar com o envio do CPF
    const enviarCpf = () => {
        setAviso("CPF enviado com sucesso. Você pode continuar agora!");
    }

    // Código JSX representando a interface do componente
    return (
        <>
            {/* Cabeçalho */}
            <h1 className='subtitulo'>&nbsp;&nbsp;TechnoBike</h1>

            {/* Título principal */}
            <h2>Identificação</h2>

            {/* Campo de entrada para o CPF */}
            <p className='textoIdentificacao'>&nbsp;&nbsp;Informe seu CPF:</p>
            <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} id="ColetarCpf" placeholder="Digite aqui"/>
            
            {/* Botão para enviar o CPF */}
            <button id="EnviarCPF" onClick={enviarCpf}>Enviar</button> 

            {/* Exibe a mensagem de aviso e o link para a próxima etapa se o CPF for enviado */}
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
