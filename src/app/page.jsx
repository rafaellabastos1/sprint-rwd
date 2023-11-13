import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='textoHome'>
        <p>A Porto Seguro é uma empresa fundada em 1945 e que se especializa na área de seguros, soluções financeiras e serviços em geral.</p>

        <p>A TechnoBike, em parceria com a FIAP, pretende automatizar o processo de vistoria de Bikes com sua realização feita on-line, com a utilização de Inteligência Artificial e sem a necessidade de intervenção humana no processo. Dessa forma, será promovido a você uma maior rapidez e comodidade.</p>
      </div>

      <div className='grupoBike'>
        <figure className='fotoBike'>
          <Image src='/images/bike.jpeg'
            width={514}
            height={239}
            alt="Bicicleta">
          </Image>
        </figure>

        <div className='cardBike'>
          <Link href='/principal/vistoria'>Faça sua vistoria aqui</Link>
        </div>
      </div>

      <div className='grupoIntegrantes'>
        <div className='cardIntegrantes'>
          <Link href='/principal/integrantes'>Conheça nossos integrantes</Link>
        </div>

        <figure className='fotoMao'>
          <Image src='/images/mao.jpeg'
            width={468}
            height={239}
            alt="Mão segurando um cadeado">
          </Image>
        </figure>
      </div>
    </>
  )
}
