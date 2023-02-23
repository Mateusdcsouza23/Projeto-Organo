import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({aoColaboradorAdd, nomeTimes, cadastrarTime}) => {

const [id, setId] = useState(uuidv4())
const [nome, setNome] = useState('')
const [cargo, setCargo] = useState('')
const [imagem, setImagem] = useState('')
const [time, setTime] = useState ('')
const [nomeTime, setNomeTime] = useState ('')
const [corTime, setCorTime] = useState ()

const [endereco, setEndereco] = useState('')

// const manipularEndereco = () => {


// }



const aoSalvar = (evento) => {
    const favorito = false
    evento.preventDefault()
    aoColaboradorAdd({
        favorito, 
        id,
        nome,
        cargo,
        endereco,
        imagem,
        time

}) 


// fetch(`https://viacep.com.br/ws/${endereco}/json/`)
// .then(resposta => resposta.json())
// .then(dados => {
//     setEndereco({
//     cidade: dados.localidade
// })
// console.log(`${endereco.cidade}`)
// })  


setId(uuidv4())
setNome ('')
setCargo ('')
setEndereco ({})
setImagem ('')
setTime ('')



}


    return(

        <section className='formulario'>
            <form onSubmit={aoSalvar}>      
    
    <h2>Preencha os dados para criar o card do colaborador</h2>               
    <CampoTexto 
    obrigatorio
    label="Nome" 
    placeholder="Digite seu nome"
    valor ={nome}
    aoAlterado={valor => setNome(valor)}
    />

    <CampoTexto 
    obrigatorio  
    label="Cargo" 
    placeholder="Digite seu cargo"
    valor = {cargo}
    aoAlterado = {valor => setCargo(valor)}
    />
    
    <CampoTexto
    obrigatorio  
    label="Cidade" 
    placeholder="Digite sua cidade"
    valor = {endereco}
    aoAlterado = {valor => setEndereco(valor)}
    />

    <CampoTexto 
    label="Imagem" 
    placeholder="Digite o endereço da imagem" 
    valor = {imagem}
    aoAlterado = {valor => setImagem(valor)}
    />

    <ListaSuspensa 
    obrigatorio  
    label="Time" 
    itens={nomeTimes}
    valor = {time}
    aoAlterado = {valor => setTime(valor)}
    />
    <Botao>Criar Card</Botao>          
            </form>
{/* 
        Cadastro de um novo time */}


    <form onSubmit={(evento) =>{ 
    evento.preventDefault()
    cadastrarTime({nome: nomeTime, cor: corTime})
    }}>
    <h2>Preencha os dados para criar o novo time</h2>               
    
    <CampoTexto  
    obrigatorio 
    label="Nome do time" 
    placeholder="Digite o nome do time"
    valor ={nomeTime}
    aoAlterado={valor => setNomeTime(valor)}
    />

    <CampoTexto 
    obrigatorio
    type='color'
    label="Digite sua cor" 
    placeholder="Digite a cor do seu time"
    valor = {corTime}
    aoAlterado = {valor => setCorTime(valor)}
    />
   
   <Botao>Criar novo time</Botao>          
   </form>
    
        </section>
    )
}


export default Formulario