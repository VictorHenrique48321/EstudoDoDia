import { useState } from 'react';
import Cronometro from '../componentes/cronometro';
import Formulario from '../componentes/formulario';
import Lista from '../componentes/lista';
import { Itarefa } from '../tipos/tarefas';

import style from "./App.module.scss"

function App() {
  
  const [tarefas, setTarefas] = useState<Itarefa[]> ([])
  const [selecionado, setSelecionado] = useState<Itarefa>()

  function selecionarTarefa (tarefaSelecionada: Itarefa) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} selecionarTarefa={selecionarTarefa}/>
      <Cronometro selecionado={selecionado}/>
    </div>
  );
}

export default App;
