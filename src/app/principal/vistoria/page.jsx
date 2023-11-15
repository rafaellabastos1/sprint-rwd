import Link from 'next/link';

export default function Vistoria() {
    return (
        <>
            {/* Título da Página */}
            <h1 className='subtitulo'>TechnoBike</h1>

            {/* Título da Seção */}
            <h2>Processo de vistoria</h2>

            {/* Introdução */}
            <p className='textoVistoria'>
                Olá, seja bem-vindo à TechnoBike. Nosso objetivo é promover uma vistoria de seguro bike com rapidez e comodidade a você!
            </p>

            <h3>Primeira etapa: </h3>
            
            {/* Link para a página 'Identificação' */}
            <div className='caixaVistoria'>
                <Link href='/secundaria/identificacao'>Identificação</Link>
            </div>
        </>
    );
}