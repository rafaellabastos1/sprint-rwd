import Link from 'next/link'
import Page from './secundaria/StatusVistoria/page';

export default function ArquivosVistoria() {

    const enviarFotos = () =>{
        alert ("Fotos enviadas com sucesso!")
    }
    const enviarVideos = () =>{
        alert("Vídeos enviados com sucesso!")
    }

    return (
        <>
            <h1>Vistoria</h1>
            <div id="fotosVistoria">
            
                <h2>Envio das fotos</h2>
                <p>Envie fotos dos pontos chaves da sua bike listados abaixo: </p>
                <ul>
                    <li>Foto da bike inteira de lado: </li>
                    <input type="image" id="ftBikeInteira" placeholder="Digite aqui"/>

                    <li>Foto do número: </li>
                    <input type="image" id="ftNumero" placeholder="Digite aqui"/>

                    <li>Foto da roda: </li>
                    <input type="image" id="ftRoda" placeholder="Digite aqui"/>

                    <li>Foto dos freios: </li>
                    <input type="image" id="ftFreios" placeholder="Digite aqui"/>

                    <li>Foto do guidão: </li>
                    <input type="image" id="ftGuidao" placeholder="Digite aqui"/>

                    <li>Foto dos pedais: </li>
                    <input type="image" id="ftPedais" placeholder="Digite aqui"/>

                    <li>Foto sua com a bike: </li>
                    <input type="image" id="ftSelfieBike" placeholder="Digite aqui"/>

                    <li>Foto da bike de frente: </li>
                    <input type="image" id="ftBikeFrente" placeholder="Digite aqui"/>

                    <li>Foto dos acessórios (se for visível): </li>
                    <input type="image" id="ftAcessorios" placeholder="Digite aqui"/>
                </ul>
                <button type="button" id="enviaFotos" onClick={enviarFotos}>Enviar</button>
            </div>
            
            <div id="videosVistoria">
                <h2>Videos</h2>
                <p>Envie vídeos dos pontos chaves da sua bike listados abaixo: </p>
                <ul>
                    <li>Vídeo mostrando a bike completa: </li>
                    <input type="image" id="vdBikeCompleta" placeholder="Digite aqui"/>
              
                    <li>Vídeo mostrando com mais ênfase cada ponto chave que foi tirado foto:  </li>
                    <input type="image" id="vdPontoChave" placeholder="Digite aqui"/>
                </ul>
                <button type="button" id="enviaVideos" onClick={enviarVideos}>Enviar</button>
            </div>
            
            <p>Próxima etapa: </p>
            <ul>
                <li><Link href='/secundaria/StatusVistoria'>Conferir status da vistoria</Link></li>
            </ul>
        </>
    )
}