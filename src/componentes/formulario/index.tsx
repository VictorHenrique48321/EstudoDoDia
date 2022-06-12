import React from "react";
import { Itarefa } from "../../tipos/tarefas";
import Botao from "../botao";
import { v4 as uuidv4 } from 'uuid';

import style from "./Formulario.module.scss"

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}> { 
  state = {
    tarefa: "",
    tempo: "00:00"
  }

  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    this.props.setTarefas(tarefasAntiga => 
      [...tarefasAntiga, 
        {
          ...this.state,
          selecionado: false, 
          completo: false,
          id: uuidv4()
        }
      ])
    this.setState({tarefa: "", tempo: "00:00"})
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input 
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={evento => this.setState({...this.state , tarefa: evento.target.value})}
            placeholder="o que voce quer estudar"
            required
         />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input 
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            value={this.state.tempo}
            onChange={evento => this.setState({...this.state , tempo: evento.target.value})}
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao type="submit">
          Adicionar
        </Botao>
      </form>
    )
  }
}
export default Formulario