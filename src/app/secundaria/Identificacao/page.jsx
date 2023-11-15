"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Identificacao() {

    // Declara e inicializa variáveis de estado usando o hook useState
    const [cpf, setCpf] = useState("");
    const [aviso, setAviso] = useState("");
    const [aviso2, setAviso2] = useState("")
    const [aviso3, setAviso3] = useState("")
    const [clientes, setClientes] = useState([])
    const [clienteCadastrado, setClienteCadastrado] = useState([])
    
    const [clienteNovo, setClienteNovo] = useState({
        cpf : "",
        opcSeguro: "1",
        bikeInteira: "Sim",
        numSerie: "987654",
        roda: "redonda",
        freios: "Disco",
        guidao: "Curvo",
        pedais: "Clip",
        corrente: "Dupla",
        clienteBike: "Cliente42",
        bikeFrente: "sim",
        acessorios: "Farol",
        videoBike: "https://www.youtube.com/watch?v=abc12345678",
        videoPartes: "https://www.youtube.com/watch?v=def98765432",
        analiseVistoria : "Em análise"
    })
    
    useEffect(() => {
        fetch(`http://localhost:8080/technobike/${cpf}`, {
            method: "get"
        }).then((resp) =>{
            return resp.json();
        }).then((resp) =>{
            setClientes(resp)
            console.log(resp)
        }).then((data) =>{
            setClienteNovo((prevClienteNovo) => ({
                ...prevClienteNovo,
                cpf: data,
              }));
        })
        .catch((error) => {
            console.log(error)
        })
    }, []);
      
   
    const handleChange = ()=> {
           // Verifica se o CPF existe nos clientes
           const buscarCpf = clientes.find((cliente) => cliente.cpf === cpf);

           if (buscarCpf) {
               setClienteCadastrado([buscarCpf]); // Define o cliente cadastrado
               setAviso("CPF encontrado. Você pode continuar agora!");
           } else if(cpf.length === 11 || Number.isInteger(cpf)){
               setClienteNovo((prevClienteNovo) => ({
                ...prevClienteNovo,
                cpf : cpf,
               })); // Limpa os dados do cliente
               setAviso2("CPF não encontrado.");
           }else{
            setAviso("CPF inválido. Tente novamente")
           }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (cpf.length === 11 || Number.isInteger(cpf)) {

          setClienteNovo((prevClienteNovo) => ({
            ...prevClienteNovo,
            cpf: cpf,
          }));

           try {
            const response = await fetch(`http://localhost:8080/technobike/`, {
                method: "post",
                headers: { 
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(clienteNovo),
            });

            if (response.ok) {
                console.log("Inserção bem-sucedida!");
                setAviso3("Sucesso ao enviar!")
            } else {
                console.error("Erro ao inserir: ", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Erro durante a solicitação: ", error.message);
        }
        }
      };

    return (
        <>
            {/* Cabeçalho */}
            <h1 className='subtitulo'>TechnoBike</h1>

            {/* Título principal */}
            <h2>Identificação</h2>

            {/* Campo de entrada para o CPF */}
            <p className='textoIdentificacao'>Informe seu CPF:</p>
            <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} id="ColetarCpf" placeholder="Digite aqui"/>
            
            {/* Botão para enviar o CPF */}
            <button id="EnviarCPF" onClick={handleChange}>Enviar</button> 

            {/* Exibe a mensagem de aviso e o link para a próxima etapa se o CPF for enviado */}
            {aviso && (
                <div>
                    <p>{aviso}</p>
                    {clienteCadastrado.map((cliente) => (
                        <div key={cliente.cpf}>
                            <p>O cpf: {cliente.cpf} está cadastrado </p>
                            <h3>Próxima etapa: </h3>
                            <div className='caixaIdentificacao'>
                                <Link href='/secundaria/tipo-seguro'>Escolha do tipo do seguro</Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {aviso2 && (
                <div>
                    <p>{aviso2}</p>
                    <h3>Deseja realizar um novo cadastro?</h3>
                <button id='CadastrarCpf' onClick={handleSubmit}>Cadastrar</button>
                </div>
                
            )}
            {aviso3 &&(
                <div>
                    <h3>Cliente cadastrado!</h3>
                    <div className='caixaIdentificacao'>
                        <Link href='/secundaria/tipo-seguro'>Escolha do tipo do seguro</Link>
                    </div>
                </div>
               
            )}
            
        </>
    )
    
}


