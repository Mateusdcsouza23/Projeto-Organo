import './Botao.css'

const Botao = (props) => {
    
const textoBtn = `${props.children}`    
    return(
        <button 
        className='botao'> 
            {textoBtn}
        </button>
    )
        
    
}

export default Botao