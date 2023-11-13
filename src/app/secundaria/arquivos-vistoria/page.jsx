"use client";
import { useState } from 'react';
import Link from 'next/link'

export default function ArquivosVistoria() {
    useState

    const [avisoFoto, setAvisoFoto] = useState("");
    const [avisoVideo, setAvisoVideo] = useState("");
    const [fotoEnviada, setFotoEnviada] = useState(false);
    const [videoEnviado, setVideoEnviado] = useState(false);


    const enviarFotos = () =>{
        setAvisoFoto("Fotos enviadas com sucesso!");
        setFotoEnviada(true);
    }
    const enviarVideos = () =>{
        setAvisoVideo("Vídeos enviados com sucesso!");
        setVideoEnviado(true);
    }

    return (
        <>
            <h1 className='subtitulo'>&nbsp;&nbsp;TechnoBike</h1>

            <h2>Vistoria</h2>
            
            <div id="fotosVistoria">
                <p className='textoArquivos'>&nbsp;&nbsp;Envie fotos dos pontos chaves da sua bike listados abaixo: </p>
                
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

                <button className='botaoArquivos' type="button" id="enviaFotos" onClick={enviarFotos}>Enviar</button>
            </div>
            
            <div>
                <p className='textoArquivos'>&nbsp;&nbsp;Envie vídeos dos pontos chaves da sua bike listados abaixo: </p>
                    
                <div className='enviarVideosContainer'>
                    <p className='enviarVideos1'>Vídeo mostrando a bike completa: </p>
                    <input type="file" id="vdBikeCompleta" placeholder="Digite aqui"/>
              
                    <p className='enviarVideos2'>Vídeo mostrando com mais ênfase cada ponto chave que foi tirado foto:  </p>
                    <input type="file" id="vdPontoChave" placeholder="Digite aqui"/>
                </div>
                
                <button className='botaoArquivos' type="button" id="enviaVideos" onClick={enviarVideos}>Enviar</button>
            </div>
            
            {avisoFoto && (
                <p>{avisoFoto}</p>
            )}

            {avisoVideo && (
                <p>{avisoVideo}</p>
            )}

            {fotoEnviada && videoEnviado &&  (
                <div>
                    <br/><h3>Próxima etapa: </h3>
                    <div className='caixaArquivos'>
                        <Link href='/secundaria/status-vistoria'>&nbsp;&nbsp;Conferir status da vistoria</Link>
                    </div>
                </div>
            )}
        </>
    )
}