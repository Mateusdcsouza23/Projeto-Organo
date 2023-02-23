import'./ListaSuspensa.css'

const ListaSuspensa = ({label, aoAlterado, valor, obrigatorio, itens}) => {

    return(
        <div className="lista-suspensa">
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} value={valor} required={obrigatorio}>
            
            <option className='sel-select'>Selecione um time</option>

            {itens.map(item =><option key={item}>{item}</option>)}
            </select>
        
        </div>
    )

}

export default ListaSuspensa