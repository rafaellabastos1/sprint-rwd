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
            <h2>Escolha do tipo do seguro</h2>

            <p>Para começarmos, preciso que você escolha o tipo de seguro que mais se adequa às suas necessidades:</p>
                
            <ul>
                <li>Para ciclistas que pedalam na rua</li>
                <button type="button" onClick={()=>tipoSeguro(0)}>Selecionar</button>

                <li>Para ciclistas de maratona</li>
                <button type="button" onClick={()=>tipoSeguro(1)}>Selecionar</button>

                <li>Para ciclistas que pedalam em montanhas</li>
                <button type="button" onClick={()=>tipoSeguro(2)}>Selecionar</button>

                <li>Para ciclistas que pedalam em pedras e rochas</li>
                <button type="button" onClick={()=>tipoSeguro(3)}>Selecionar</button>

                <li>Para ciclistas que pedalam em terra e mato</li>
                <button type="button" onClick={()=>tipoSeguro(4)}>Selecionar</button>

                <li>Para ciclistas por hobbie</li>
                <button type="button" onClick={()=>tipoSeguro(5)}>Selecionar</button>

                <li>Para ciclistas que viajam com a bike</li>
                <button type="button" onClick={()=>tipoSeguro(6)}>Selecionar</button>
            </ul>

            {aviso && (
                <div>
                    <p>{aviso}</p>
                    <p>Próxima etapa: </p>
                    <ul>
                        <li><Link href='/secundaria/arquivos-vistoria'>Envio dos arquivos da vistoria</Link></li>
                    </ul>
                </div>
            )}
        </>
    )
}