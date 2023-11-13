"use client";
import { useState } from 'react';
import Link from 'next/link'

export default function TipoSeguro() {
    useState

    const [aviso, setAviso] = useState("");

    const tipoSeguro = (seguro) => {
        if (seguro === 0) {
            setAviso("Seguro para ciclistas que pedalam na rua selecionado!")
        } else if (seguro === 1) {
            setAviso("Seguro para ciclistas de maratona selecionado!")
        } else if (seguro === 2) {
            setAviso("Seguro para ciclistas que pedalam em montanhas selecionado!")
        } else if (seguro === 3) {
            setAviso("Seguro para ciclistas que pedalam em pedras e rochas selecionado!")
        } else if (seguro === 4) {
            setAviso("Seguro para ciclistas que pedalam em terra e mato selecionado!")
        } else if (seguro === 5) {
            setAviso("Seguro para ciclistas por hobbie selecionado!")
        } else if (seguro === 6) {
            setAviso("Seguro para ciclistas que viajam com a bike selecionado!")
        }
    } 

    return (
        <>
            <h1 className='subtitulo'>&nbsp;&nbsp;TechnoBike</h1>
            
            <h2>Escolha do tipo do seguro</h2>

            <p className='textoSeguro'>Para começarmos, preciso que você escolha o tipo de seguro que mais se adequa às suas necessidades:</p>

            <div className='botaoContainer'> 
                <ul>
                    <button className='botaoSeguro' type="button" onClick={()=>tipoSeguro(0)}>Para ciclistas que pedalam na rua</button>

                    <button className='botaoSeguro' type="button" onClick={()=>tipoSeguro(1)}>Para ciclistas de maratona</button>

                    <button className='botaoSeguro' type="button" onClick={()=>tipoSeguro(2)}>Para ciclistas que pedalam em montanhas</button>

                    <button className='botaoSeguro' type="button" onClick={()=>tipoSeguro(3)}>Para ciclistas que pedalam em pedras e rochas</button>

                    <button className='botaoSeguro' type="button" onClick={()=>tipoSeguro(4)}>Para ciclistas que pedalam em terra e mato</button>

                    <button className='botaoSeguro' type="button" onClick={()=>tipoSeguro(5)}>Para ciclistas por hobbie</button>

                    <button className='botaoSeguro' type="button" onClick={()=>tipoSeguro(6)}>Para ciclistas que viajam com a bike</button>
                </ul>
            </div>

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