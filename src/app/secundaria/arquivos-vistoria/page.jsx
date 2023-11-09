"use client";
import { useState } from 'react';
import Link from 'next/link'

export default function ArquivosVistoria() {
    useState

    const [aviso, setAviso] = useState("");
    const [fotoEnviada, setFotoEnviada] = useState(false);
    const [videoEnviado, setVideoEnviado] = useState(false);


    const enviarFotos = () =>{
        setAviso("Fotos enviadas com sucesso!");
        setFotoEnviada(true);
    }
    const enviarVideos = () =>{
        setAviso("Vídeos enviados com sucesso!");
        setVideoEnviado(true);
    }

    return (
        <>
            <h1>Vistoria</h1>
            <div id="fotosVistoria">
            
                <h2>Envio das fotos</h2>
                <p>Envie fotos dos pontos chaves da sua bike listados abaixo: </p>
                <ul>
                    <li>Foto da bike inteira de lado: </li>
                    <input type="file" id="ftBikeInteira" placeholder="Digite aqui"/>

                    <li>Foto do número de série: </li>
                    <input type="file" id="ftNumero" placeholder="Digite aqui"/>

                    <li>Foto da roda: </li>
                    <input type="file" id="ftRoda" placeholder="Digite aqui"/>

                    <li>Foto dos freios: </li>
                    <input type="file" id="ftFreios" placeholder="Digite aqui"/>

                    <li>Foto do guidão: </li>
                    <input type="file" id="ftGuidao" placeholder="Digite aqui"/>

                    <li>Foto dos pedais: </li>
                    <input type="file" id="ftPedais" placeholder="Digite aqui"/>

                    <li>Foto sua com a bike: </li>
                    <input type="file" id="ftSelfieBike" placeholder="Digite aqui"/>

                    <li>Foto da bike de frente: </li>
                    <input type="file" id="ftBikeFrente" placeholder="Digite aqui"/>

                    <li>Foto dos acessórios (se for visível): </li>
                    <input type="file" id="ftAcessorios" placeholder="Digite aqui"/>
                </ul>
                <button type="button" id="enviaFotos" onClick={enviarFotos}>Enviar</button>
            </div>
            
            <div id="videosVistoria">
                <h2>Videos</h2>
                <p>Envie vídeos dos pontos chaves da sua bike listados abaixo: </p>
                <ul>
                    <li>Vídeo mostrando a bike completa: </li>
                    <input type="file" id="vdBikeCompleta" placeholder="Digite aqui"/>
              
                    <li>Vídeo mostrando com mais ênfase cada ponto chave que foi tirado foto:  </li>
                    <input type="file" id="vdPontoChave" placeholder="Digite aqui"/>
                </ul>
                <button type="button" id="enviaVideos" onClick={enviarVideos}>Enviar</button>
            </div>
            
            {fotoEnviada && videoEnviado &&  (
                <div>
                    <p>Próxima etapa: </p>
                    <ul>
                        <li><Link href='/secundaria/status-vistoria'>Conferir status da vistoria</Link></li>
                    </ul>
                </div>
            )}
        </>
    )
}