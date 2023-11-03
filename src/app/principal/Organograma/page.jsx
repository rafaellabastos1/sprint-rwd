import Link from 'next/link'
import Page from './principal/Integrantes/page';
import Page from './principal/Vistoria/page';
import Page from './secundaria/Identificacao/page';
import Page from './secundaria/TipoSeguro/page';
import Page from './secundaria/ArquivosVistoria/page';
import Page from './secundaria/StatusVistoria/page';

export default function Organograma() {
    return (
        <>
            <h2>Organograma</h2>
            
            <p>Segue abaixo o organograma das páginas:</p>

            <p>Integrantes</p>
            <Link href='/principal/Integrantes'>x</Link>

            <p>Início da vistoria</p>
            <Link href='/principal/Vistoria'>x</Link>
            
            <p>Identificação do cliente</p>
            <Link href='/secundaria/Identificacao'>x</Link>
            
            <p>Escolha do tipo do seguro</p>
            <Link href='/secundaria/TipoSeguro'></Link>
            
            <p>Envio dos arquivos da vistoria</p>
            <Link href='/secundaria/ArquivosVistoria'>x</Link>
            
            <p>Status da Vistoria</p>
            <Link href='/secundaria/StatusVistoria'>x</Link>
        </>
    )
}