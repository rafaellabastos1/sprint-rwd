import Link from 'next/link';

export default function Cabecalho() {
    return(
        <>
            <nav className='cabecalho'>
                <div className='linkCabecalho'>
                    <Link href="/principal/vistoria">Vistoria | </Link>
                </div>
                <div className='linkCabecalho'>
                    <Link href="/principal/organograma">Organograma | </Link>
                </div>
                <div className='linkCabecalho'>
                    <Link href="/principal/integrantes">Integrantes</Link>
                </div>
            </nav>  
        </>
    )
}