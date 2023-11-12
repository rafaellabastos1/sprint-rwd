import Link from 'next/link';

export default function Cabecalho() {
    return(
        <>
            <nav>
                <Link href="/">Home | </Link>
                <Link href="/principal/vistoria">Vistoria | </Link>
                <Link href="/principal/organograma">Organograma | </Link>
                <Link href="/principal/integrantes">Integrantes</Link>
            </nav>  
        </>
    )
}