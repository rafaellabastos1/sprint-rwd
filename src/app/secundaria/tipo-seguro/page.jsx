"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TipoSeguro() {

    // Declara e inicializa variáveis de estado usando o hook useState
    const [aviso, setAviso] = useState("");

    // Função para definir o tipo de seguro com base no valor recebido como parâmetro
    const tipoSeguro = (seguro) => {
        if (seguro === 0) {
            setAviso("Seguro para ciclistas que pedalam na rua selecionado!");
        } else if (seguro === 1) {
            setAviso("Seguro para ciclistas de maratona selecionado!");
        } else if (seguro === 2) {
            setAviso("Seguro para ciclistas que pedalam em montanhas selecionado!");
        } else if (seguro === 3) {
            setAviso("Seguro para ciclistas que pedalam em pedras e rochas selecionado!");
        } else if (seguro === 4) {
            setAviso("Seguro para ciclistas que pedalam em terra e mato selecionado!");
        } else if (seguro === 5) {
            setAviso("Seguro para ciclistas por hobbie selecionado!");
        } else if (seguro === 6) {
            setAviso("Seguro para ciclistas que viajam com a bike selecionado!");
        } 
    }

    return (
        <>
            {/* Cabeçalho */}
            <h1 className='subtitulo'>TechnoBike</h1>

            {/* Título principal */}
            <h2>Escolha do tipo do seguro</h2>

            {/* Informação sobre a escolha do tipo de seguro */}
            <p className='textoSeguro'>Para começarmos, preciso que você escolha o tipo de seguro que mais se adequa às suas necessidades:</p>

            {/* Container de botões para escolher o tipo de seguro */}
            <div className='botaoContainer'> 
                <ul>
                    {/* Botões para cada tipo de seguro com chamadas para a função tipoSeguro */}
                    <button className='botaoSeguro' type="button" onClick={() => tipoSeguro(0)}>Para ciclistas que pedalam na rua</button>
                    <button className='botaoSeguro' type="button" onClick={() => tipoSeguro(1)}>Para ciclistas de maratona</button>
                    <button className='botaoSeguro' type="button" onClick={() => tipoSeguro(2)}>Para ciclistas que pedalam em montanhas</button>
                    <button className='botaoSeguro' type="button" onClick={() => tipoSeguro(3)}>Para ciclistas que pedalam em pedras e rochas</button>
                    <button className='botaoSeguro' type="button" onClick={() => tipoSeguro(4)}>Para ciclistas que pedalam em terra e mato</button>
                    <button className='botaoSeguro' type="button" onClick={() => tipoSeguro(5)}>Para ciclistas por hobbie</button>
                    <button className='botaoSeguro' type="button" onClick={() => tipoSeguro(6)}>Para ciclistas que viajam com a bike</button>
                </ul>
            </div>

            {/* Exibe o aviso se o tipo de seguro foi escolhido */}
            {aviso && (
                <div>
                    <p>{aviso}</p>
                    <h3>Próxima etapa: </h3>
                    <div className='caixaSeguro'>
                        <Link href='/secundaria/arquivos-vistoria'>&nbsp;&nbsp;Envio dos arquivos da vistoria</Link>
                    </div>
                </div>
            )}
        </>
    )
}