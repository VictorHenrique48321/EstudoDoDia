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

  function finalizarTarefa () {
    if(selecionado) {
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completo: true
          }
        }
        return tarefa
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} selecionarTarefa={selecionarTarefa}/>
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
    </div>
  );
}

export default App;
