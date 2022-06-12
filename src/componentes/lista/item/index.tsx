import { Itarefa } from "../../../tipos/tarefas"
import style from "./Item.module.scss"

interface Props extends Itarefa {
  selecionarTarefa: (tarefaSelecionada: Itarefa) => void
}

function Item (
  {
    tarefa, 
    tempo, 
    selecionado, 
    completo, 
    id,
    selecionarTarefa
  }: Props) { 
  return (
    <li 
      className={`${style.item} ${selecionado ? style.itemSelecionado : ""}`}
      onClick={() => selecionarTarefa({tarefa,tempo,selecionado,completo,id})}
    >
      <h3>{tarefa}</h3>
      <p>{tempo}</p>
    </li>
  )
}

export default Item