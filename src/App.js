import { useState } from 'react';
import Banner from './componentes/Banner/index.js';
import Formulario from './componentes/Formulario/index.js';
import Rodape from './componentes/Rodape/index.js';
import Time from './componentes/Time/index.js';
import { v4 as uuidv4 } from 'uuid';

function App() {

const [colaboradores, setColaboradores] = useState([])


const novoColaborador = (colaborador) => {
  
setColaboradores([...colaboradores, colaborador])
} 

const [times, setTimes] = useState  
([
  {
  
  idTime:uuidv4(),
  nome:'Back-End',
  cor:'#57C278',


          
},
  {

  idTime:uuidv4(),
  nome:'Front-End',
  cor:'#82CFFA',
        
},
  {
  
  idTime:uuidv4(),
  nome:'Devops',
  cor:'#A6D157',


          
},
  {
  
  idTime:uuidv4(),
  nome:'Product Manager',
  cor:'#E06B69',


          
},
{

  idTime:uuidv4(),
  nome:'Especialista TI',
  cor:'#D86EBF',


          
},
  {

  idTime:uuidv4(),  
  nome:'Estagiário',
  cor:'#FEBA05',


          
},
  {

  idTime:uuidv4(),  
  nome:'Trainne',
  cor:'#FF8A29',


          
} 

])



function mudarCorTime (cor, nome) {
  setTimes(times.map(time => {
    if(time.nome === nome) {
      time.cor = cor;
    }
    return time
  }))
  
}

function deletarColaborador(id){
  setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  console.log()
} 

function cadastrarTime(novoTime){
  setTimes([...times, {...novoTime, idTime:uuidv4()}])

} 

function favoritarColaborador(id){
setColaboradores(colaboradores.map(colaborador =>{
  if(colaborador.id === id) colaborador.favorito = !colaborador.favorito
  return colaborador
}))
}

  return (
    <div className="App">
    <Banner/>
    <Formulario 
      cadastrarTime={cadastrarTime}
      nomeTimes={times.map(nomesTime => nomesTime.nome )}
          aoColaboradorAdd={colaborador => novoColaborador(colaborador)}

          
    /> 
    {times.map(time =>
    <Time 
        mudarCor = {mudarCorTime}
        aoFavoritar={favoritarColaborador}
        aoDeletar={deletarColaborador}
        key={time.nome}
        nome={time.nome} 
        corPrimaria={time.cor} 
        colaboradorTime={colaboradores.filter(colaborador =>  colaborador.time === time.nome)}
      />
      )}

      <Rodape/>
    </div>
  );
}

export default App;
