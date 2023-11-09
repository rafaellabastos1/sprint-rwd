import Link from 'next/link'
import Page from '../integrantes/page';
import Page from '../vistoria/page';
import Page from '../../secundaria/identificacao/page';
import Page from '../../secundaria/tipo-seguro/page';
import Page from '../../secundaria/arquivos-vistoria/page';
import Page from '../../secundaria/status-vistoria/page';

export default function Organograma() {
    return (
        <>
            <h2>Organograma</h2>
            
            <p>Segue abaixo o organograma das páginas:</p>

            <p>Integrantes</p>
            <Link href='/principal/integrantes'>x</Link>

            <p>Início da vistoria</p>
            <Link href='/principal/vistoria'>x</Link>
            
            <p>Identificação do cliente</p>
            <Link href='/secundaria/identificacao'>x</Link>
            
            <p>Escolha do tipo do seguro</p>
            <Link href='/secundaria/tipoSeguro'></Link>
            
            <p>Envio dos arquivos da vistoria</p>
            <Link href='/secundaria/arquivos-vistoria'>x</Link>
            
            <p>Status da Vistoria</p>
            <Link href='/secundaria/status-vistoria'>x</Link>
        </>
    )
}