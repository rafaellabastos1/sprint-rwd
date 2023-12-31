import Image from 'next/image';

export default function Organograma() {
    return (
        <>
            {/* Título */}
            <h1 className='subtitulo'>TechnoBike</h1>

            {/* Página */}
            <h2>Organograma</h2>
            
            {/* Texto */}
            <p className='textoOrganograma'>Segue abaixo o organograma das páginas:</p>

            {/* Page 1: Página Inicial */}
            <div className='listaOrganograma'>
                <a href="/">
                    <figure>
                        <Image src='/images/um.jpeg'
                            width={120}
                            height={110}
                            alt='Página 1 de página inicial'>   
                        </Image>
                        <figcaption className='caixaOrganograma1'>Página inicial</figcaption>
                    </figure>
                </a>
            </div>

            {/* Page 2: Integrantes */}
            <div className='listaOrganograma'>
                <a href="/principal/integrantes">
                    <figure>
                        <Image src='/images/dois.jpeg'
                            width={120}
                            height={110}
                            alt='Página dois de integrantes'>
                        </Image>
                        <figcaption className='caixaOrganograma2'>Integrantes</figcaption>
                    </figure>
                </a>
            </div>

            {/* Page 3: Vistoria */}
            <div className='listaOrganograma'>
                <a href="/principal/vistoria">
                    <figure>
                        <Image src='/images/tres.jpeg'
                            width={120}
                            height={110}
                            alt='Página 3 para início da vistoria'>
                        </Image>
                        <figcaption className='caixaOrganograma2'>Vistoria</figcaption>
                    </figure>
                </a>
            </div>

            {/* Page 3.1: Identificação */}
            <div className='listaOrganograma'>
                <a href="/secundaria/identificacao">
                    <figure>
                        <Image src='/images/tresum.jpeg'
                            width={125}
                            height={110}
                            alt='Página 3.1 da identificação do cliente'>
                        </Image>
                        <figcaption className='caixaOrganograma3'>Identificação</figcaption>
                    </figure>
                </a>
            </div>
            
            {/* Page 3.2: Tipo do Seguro */}
            <div className='listaOrganograma'>
                <a href="/secundaria/tipo-seguro">
                    <figure>
                        <Image src='/images/tresdois.jpeg'
                            width={120}
                            height={110}
                            alt='Página 3.2 de escolha do tipo do seguro'>
                        </Image>
                        <figcaption className='caixaOrganograma1'>Tipo do seguro</figcaption>
                    </figure>
                </a>
            </div>
            
            {/* Page 3.3: Arquivos da Vistoria */}
            <div className='listaOrganograma'>
                <a href="/secundaria/arquivos-vistoria">
                    <figure>
                        <Image src='/images/trestres.jpeg'
                            width={120}
                            height={110}
                            alt='Página 3.3 de envio dos arquivos da vistoria'>
                        </Image>
                        <figcaption className='caixaOrganograma1'>Arquivos da vistoria</figcaption>
                    </figure>
                </a>
            </div>
            
            {/* Page 3.4: Status da Vistoria */}
            <div className='listaOrganograma'>
                <a href="/secundaria/status-vistoria">
                    <figure>
                        <Image src='/images/tresquatro.jpeg'
                            width={120}
                            height={110}
                            alt='Página 3.4 de status da vistoria'>
                        </Image>
                        <figcaption className='caixaOrganograma1'>Status da vistoria</figcaption>
                    </figure>
                </a>
            </div>
        </>
    )
}