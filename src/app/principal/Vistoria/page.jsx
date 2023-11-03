import Link from 'next/link'
import Page from '../../secundaria/Identificacao/page';

export default function Vistoria() {
    return (
        <>
            <h2>Processo de vistoria</h2>

            <p>Olá, seja bem vindo à TechnoBike. Nosso objetivo é promover uma vistoria de seguro bike com rapidez e 
                comodidade a você!</p>

            <p>Primeira etapa: </p>
            <ul>
                <li><Link href='/secundaria/Identificacao'>Identificação</Link></li>
            </ul>
        </>
    )
}