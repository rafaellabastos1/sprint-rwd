"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Componente funcional Identificacao
export default function Identificacao() {
    // Declara e inicializa variáveis de estado usando o hook useState
    const [cpf, setCpf] = useState("");
    const [aviso, setAviso] = useState("");
    const [clientes, setClientes] = useState([])
    const [clienteCadastrado, setClienteCadastrado] = useState([])
    // const [clienteNovo, setClienteNovo] = useState({
    //     cpf : "",
    //     opcSeguro: "1",
    //     bikeInteira: "Sim",
    //     numSerie: "987654",
    //     roda: "redonda",
    //     freios: "Disco",
    //     guidao: "Curvo",
    //     pedais: "Clip",
    //     corrente: "Dupla",
    //     clienteBike: "Cliente42",
    //     bikeFrente: "sim",
    //     acessorios: "Farol",
    //     videoBike: "https://www.youtube.com/watch?v=abc12345678",
    //     videoPartes: "https://www.youtube.com/watch?v=def98765432",
    //     analiseVistoria : "Em análise"
    // })

    useEffect(() => {
        fetch(`http://localhost:8080/technobike/`).then((resp) =>{
            return resp.json();
        }).then((resp) =>{
            setClientes(resp)
            console.log(resp)
        }).then((data) =>{
            setClienteNovo(data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])  
   
    const handleChange = ()=> {
           // Verifica se o CPF existe nos clientes
           const buscarCpf = clientes.find((cliente) => cliente.cpf === cpf);

           if (buscarCpf) {
               setClienteCadastrado([buscarCpf]); // Define o cliente cadastrado
               setAviso("CPF encontrado. Você pode continuar agora!");
           } else if(cpf.length === 11 || Number.isInteger(cpf)){
            //    setClienteNovo((prevClienteNovo) => ({
            //     ...prevClienteNovo,
            //     cpf : cpf,
            //    })); // Limpa os dados do cliente
            //    setAviso("CPF não encontrado. Enviando novo cadastro.");
           }else{
            setAviso("CPF não encontrado. Tente novamente")
           }
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (cpf.length === 11 || Number.isInteger(cpf)) {
    //       // Adicione esta verificação para garantir que cpf seja uma string antes de chamá-la
    //       setClienteNovo((prevClienteNovo) => ({
    //         ...prevClienteNovo,
    //         cpf: cpf,
    //       }));
    //       setAviso("CPF não encontrado. Enviando novo cadastro.");
    //       fetch(`http://localhost:8080/technobike/`, {
    //         method: "post",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(clienteNovo),
    //       });
    //     }
    //   };


    // Código JSX representando a interface do componente
    return (
        <>
            {/* Cabeçalho */}
            <h1 className='subtitulo'>&nbsp;&nbsp;TechnoBike</h1>

            {/* Título principal */}
            <h2>Identificação</h2>

            {/* Campo de entrada para o CPF */}
            <p className='textoIdentificacao'>&nbsp;&nbsp;Informe seu CPF:</p>
            <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} id="ColetarCpf" placeholder="Digite aqui"/>
            
            {/* Botão para enviar o CPF */}
            <button id="EnviarCPF" onClick={handleChange}>Enviar</button> 

            {/* Exibe a mensagem de aviso e o link para a próxima etapa se o CPF for enviado */}
            {aviso && (
                <div>
                    <p>{aviso}</p>
                    {clienteCadastrado.map((cliente) => (
                        <div key={cliente.cpf}>
                            <p>O status do cliente com o cpf: {cliente.cpf} está cadastrado </p>
                            <h3>Próxima etapa: </h3>
                            <div className='caixaIdentificacao'>
                                <Link href='/secundaria/tipo-seguro'>&nbsp;&nbsp;Escolha do tipo do seguro</Link>
                             </div>
                        </div>
                    ))}
                </div>
            )}
            
        </>
    )
}
