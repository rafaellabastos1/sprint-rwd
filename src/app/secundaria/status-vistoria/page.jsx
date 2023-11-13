"use client";
import { useState } from "react";

export default function StatusVistoria() {
    useState

    const[aviso, setAviso] = useState("");

    const conferir = () =>{
        setAviso("Sua vistoria está em análise!")
    }

    return (
        <>
            <h1 className="subtitulo">&nbsp;&nbsp;TechnoBike</h1>
            
            <h2>Status da Vistoria</h2>
            
            <p className="textoStatus">Você ficará sabendo do andamento de sua vistoria pelo seu e-mail. Por lá, você saberá se está em análise, com documentos faltando, se foi aprovado ou reprovado.</p>

            <div>
                <br/><h3>Também é possível acompanhar o status da sua vistoria por aqui:</h3>
                <button className="botaoArquivos" type="button" onClick={conferir}>Status da vistoria</button>

                {aviso && (
                    <p>{aviso}</p>
                )}
            </div>
        </>
    )
}