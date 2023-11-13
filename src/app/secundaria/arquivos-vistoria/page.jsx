"use client";
import { useState } from 'react';
import Link from 'next/link';

// Componente funcional ArquivosVistoria
export default function ArquivosVistoria() {
    // Declara e inicializa variáveis de estado usando o hook useState
    const [avisoFoto, setAvisoFoto] = useState("");
    const [avisoVideo, setAvisoVideo] = useState("");
    const [fotoEnviada, setFotoEnviada] = useState(false);
    const [videoEnviado, setVideoEnviado] = useState(false);

    // Função para lidar com o envio de fotos
    const enviarFotos = () => {
        setAvisoFoto("Fotos enviadas com sucesso!");
        setFotoEnviada(true);
    }

    // Função para lidar com o envio de vídeos
    const enviarVideos = () => {
        setAvisoVideo("Vídeos enviados com sucesso!");
        setVideoEnviado(true);
    }

    // Código JSX representando a interface do componente
    return (
        <>
            {/* Cabeçalho */}
            <h1 className='subtitulo'>&nbsp;&nbsp;TechnoBike</h1>

            {/* Título principal */}
            <h2>Vistoria</h2>

            {/* Seção de envio de fotos */}
            <div id="fotosVistoria">
                <p className='textoArquivos'>&nbsp;&nbsp;Envie fotos dos pontos-chave da sua bicicleta listados abaixo: </p>

                {/* Campos de entrada de fotos */}
                <div>
                    {/* Repita este bloco para cada categoria de foto */}
                    <p className='enviarFotos'>Foto da bicicleta inteira de lado: </p>
                    <input type="file" id="ftBikeInteira" placeholder="Digite aqui" />

                    {/* Repita outros campos de entrada de fotos aqui */}
                </div>

                {/* Botão para enviar fotos */}
                <button className='botaoArquivos' type="button" id="enviaFotos" onClick={enviarFotos}>Enviar</button>
            </div>

            {/* Seção de envio de vídeos */}
            <div>
                <p className='textoArquivos'>&nbsp;&nbsp;Envie vídeos dos pontos-chave da sua bicicleta listados abaixo: </p>

                {/* Campos de entrada de vídeos */}
                <div className='enviarVideosContainer'>
                    {/* Repita este bloco para cada categoria de vídeo */}
                    <p className='enviarVideos1'>Vídeo mostrando a bicicleta completa: </p>
                    <input type="file" id="vdBikeCompleta" placeholder="Digite aqui" />

                    {/* Repita outros campos de entrada de vídeos aqui */}
                </div>

                {/* Botão para enviar vídeos */}
                <button className='botaoArquivos' type="button" id="enviaVideos" onClick={enviarVideos}>Enviar</button>
            </div>

            {/* Exibe mensagens de sucesso */}
            {avisoFoto && (
                <p>{avisoFoto}</p>
            )}

            {avisoVideo && (
                <p>{avisoVideo}</p>
            )}

            {/* Se tanto fotos quanto vídeos forem enviados, exibe o link para a próxima etapa */}
            {fotoEnviada && videoEnviado && (
                <div>
                    <br /><h3>Próxima etapa: </h3>
                    <div className='caixaArquivos'>
                        <Link href='/secundaria/status-vistoria'>&nbsp;&nbsp;Conferir status da vistoria</Link>
                    </div>
                </div>
            )}
        </>
    )
}