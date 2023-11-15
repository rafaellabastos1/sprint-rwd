"use client";
import { useState } from 'react';
import Link from 'next/link';

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
                    <p className='enviarFotos'>Foto da bike inteira de lado: </p>
                    <input type="file" id="ftBikeInteira" placeholder="Digite aqui"/>
                    
                    <p className='enviarFotos'>Foto do número de série: </p>
                    <input type="file" id="ftNumero" placeholder="Digite aqui"/>
                    
                    <p className='enviarFotos'>Foto da roda: </p>
                    <input type="file" id="ftRoda" placeholder="Digite aqui"/>
                    
                    <p className='enviarFotos'>Foto dos freios: </p>
                    <input type="file" id="ftFreios" placeholder="Digite aqui"/>
                    
                    <p className='enviarFotos'>Foto do guidão: </p>
                    <input type="file" id="ftGuidao" placeholder="Digite aqui"/>
                    
                    <p className='enviarFotos'>Foto dos pedais: </p>
                    <input type="file" id="ftPedais" placeholder="Digite aqui"/>
                    
                    <p className='enviarFotos'>Foto sua com a bike: </p>
                    <input type="file" id="ftSelfieBike" placeholder="Digite aqui"/>
                    
                    <p className='enviarFotos'>Foto da bike de frente: </p>
                    <input type="file" id="ftBikeFrente" placeholder="Digite aqui"/>
                    
                    <p className='enviarFotos'>Foto dos acessórios: </p>
                    <input type="file" id="ftAcessorios" placeholder="Digite aqui"/>
                </div>

                {/* Botão para enviar fotos */}
                <button className='botaoArquivos' type="button" id="enviaFotos" onClick={enviarFotos}>Enviar</button>
            </div>

            {/* Seção de envio de vídeos */}
            <div>
                <p className='textoArquivos'>&nbsp;&nbsp;Envie vídeos dos pontos-chave da sua bicicleta listados abaixo: </p>

                {/* Campos de entrada de vídeos */}
                <div className='enviarVideosContainer'>
                    <p className='enviarVideos1'>Vídeo com a bicicleta completa: </p>
                    <input type="file" id="vdBikeCompleta" placeholder="Digite aqui" />

                    <p className='enviarVideos2'>Vídeo mostrando com mais ênfase cada ponto chave que foi tirado foto:  </p>
                    <input type="file" id="vdPontoChave" placeholder="Digite aqui"/>
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
                        <Link href='/secundaria/status-vistoria'>Conferir status da vistoria</Link>
                    </div>
                </div>
            )}
        </>
    )
}