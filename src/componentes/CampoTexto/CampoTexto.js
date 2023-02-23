import './CampoTexto.css'

export const CampoTexto = ({type = 'text', label, valor, obrigatorio, placeholder, aoAlterado}) => {

    const place = `${placeholder}`

    
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value) 


    }


    return (

        <div className={`campo campo-${type}`}> 
            <label>{label}</label>
            <input type={type} value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={place}/>    
        
        </div>


        
    )

}
