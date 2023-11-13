import Link from 'next/link'

export default function Vistoria() {
    return (
        <>
            <h1 className='subtitulo'>&nbsp;&nbsp;TechnoBike</h1>

            <h2>Processo de vistoria</h2>

            <p className='textoVistoria'>Olá, seja bem vindo à TechnoBike. Nosso objetivo é promover uma vistoria de seguro bike com rapidez e 
                comodidade a você!</p>

            <h3>Primeira etapa: </h3>
            
            <div className='caixaVistoria'>
                <Link href='/secundaria/identificacao'>&nbsp;&nbsp;&nbsp;Identificação</Link>
            </div>
        </>
    )
}