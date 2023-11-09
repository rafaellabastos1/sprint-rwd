import { useClient} from 'next/client';

export default function StatusVistoria() {

    const conferir = () =>{
        alert("Sua vistoria está em análise!")
    }

    useClient();

    return (
        <>
            <h1>Status da Vistoria</h1>
            <div>
                <p>Você ficará sabendo do andamento de sua vistoria pelo seu e-mail. Por lá, você saberá se está em análise, com documentos faltando, se foi aprovado ou reprovado.</p>

                <p>Também é possível acompanhar o status da sua vistoria por aqui:</p>
                <button type="button" onClick={conferir}>Status da vistoria</button>
            </div>
        </>
    )
}