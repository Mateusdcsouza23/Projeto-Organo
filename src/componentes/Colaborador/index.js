import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart  } from 'react-icons/ai';
import './Colaborador.css'

        const Colaborador = ({id, favorito, nome, cargo, imagem, endereco, corDeFundo, aoDeletar, aoFavoritar}) =>{
    
    function favoritarTime(){
        aoFavoritar(id)
    } 



    return(
        <div className='colaborador'>
        <AiFillCloseCircle
        size={25} 
        className='deletar'
        onClick={() => aoDeletar(id)}
        />
        <div className='cabecalho' style={{backgroundColor: corDeFundo}} >

             <img src= {imagem} alt={nome}></img>
        </div> 
        
        <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <h5>{endereco}</h5>
        <div className='favoritar'>
        {favorito ?
        <AiFillHeart onClick={favoritarTime}/>:
        <AiOutlineHeart onClick={favoritarTime}/>  
        }
        </div>
        </div>
        
        </div>
    )
}

export default Colaborador