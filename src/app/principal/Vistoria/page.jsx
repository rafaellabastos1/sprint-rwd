import Link from 'next/link';

// Componente para a página de Vistoria
export default function Vistoria() {
    return (
        <>
            {/* Título da Página */}
            <h1 className='subtitulo'>&nbsp;&nbsp;TechnoBike</h1>

            {/* Título da Seção */}
            <h2>Processo de vistoria</h2>

            {/* Introdução */}
            <p className='textoVistoria'>
                Olá, seja bem-vindo à TechnoBike. Nosso objetivo é promover uma vistoria de seguro bike com rapidez e comodidade a você!
            </p>

            {/* Título da Primeira Etapa */}
            <h3>Primeira etapa: </h3>
            
            {/* Link para a página 'Identificação' */}
            <div className='caixaVistoria'>
                <Link href='/secundaria/identificacao'>&nbsp;&nbsp;&nbsp;Identificação</Link>
            </div>
        </>
    );
}