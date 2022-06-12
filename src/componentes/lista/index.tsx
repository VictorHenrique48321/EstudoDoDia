import { Itarefa } from '../../tipos/tarefas'
import Item from './item'

import style from "./Lista.module.scss"

interface Props {
  tarefas: Itarefa[],
  selecionarTarefa: (tarefaSelecionada: Itarefa) => void
}

function Lista({tarefas, selecionarTarefa}: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item
            selecionarTarefa={selecionarTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista