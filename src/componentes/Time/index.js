import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';


const Time = (props) => {

    return (
        (props.colaboradorTime.length > 0) ?
            <section className='time' style={{backgroundImage: 'url(imagens/fundo.png)', backgroundColor:hexToRgba(props.corPrimaria, '0.6')}} >
                <input onChange={evento => props.mudarCor(evento.target.value, props.nome)}
                    value={props.corPrimaria} type='color' className='input-color' />
                <h3 style={{borderColor: props.corPrimaria }}>{props.nome}</h3>
                <div className='colaboradores'>
                    
                    {props.colaboradorTime.map(colaborador => {
                        return <Colaborador 
                        corDeFundo={props.corPrimaria}
                        aoFavoritar={props.aoFavoritar}
                            id ={colaborador.id}
                            favorito={colaborador.favorito}
                            key={colaborador.id} nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            endereco={colaborador.endereco}
                            imagem={colaborador.imagem}
                            aoDeletar={props.aoDeletar} 
                            
                            />
                    })}
                    </div> 
                    </section> : ''
    )
}
export default Time