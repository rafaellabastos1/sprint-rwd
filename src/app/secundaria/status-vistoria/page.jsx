"use client";
import { useState } from "react";

// Componente funcional StatusVistoria
export default function StatusVistoria() {
    // Declara e inicializa variáveis de estado usando o hook useState
    const [aviso, setAviso] = useState("");

    // Função para conferir o status da vistoria
    const conferir = () => {
        setAviso("Sua vistoria está em análise!");
    }

    // Código JSX representando a interface do componente
    return (
        <>
            {/* Cabeçalho */}
            <h1 className="subtitulo">&nbsp;&nbsp;TechnoBike</h1>

            {/* Título principal */}
            <h2>Status da Vistoria</h2>

            {/* Informação sobre o acompanhamento do status por e-mail */}
            <p className="textoStatus">Você ficará sabendo do andamento de sua vistoria pelo seu e-mail. Por lá, você saberá se está em análise, com documentos faltando, se foi aprovado ou reprovado.</p>

            {/* Seção para conferir o status da vistoria */}
            <div>
                <br/><h3>Também é possível acompanhar o status da sua vistoria por aqui:</h3>

                {/* Botão para conferir o status da vistoria */}
                <button className="botaoArquivos" type="button" onClick={conferir}>Status da vistoria</button>

                {/* Exibe o aviso se o status da vistoria foi conferido */}
                {aviso && (
                    <p>{aviso}</p>
                )}
            </div>
        </>
    )
}