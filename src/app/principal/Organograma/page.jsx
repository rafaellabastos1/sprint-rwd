import Link from 'next/link';
import Image from 'next/image';

export default function Organograma() {
    return (
        <>
            <h1 className='subtitulo'>&nbsp;&nbsp;TechnoBike</h1>

            <h2>Organograma</h2>
            
            <p className='textoOrganograma'>&nbsp;&nbsp;Segue abaixo o organograma das páginas:</p>

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