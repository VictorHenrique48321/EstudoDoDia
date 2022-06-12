import Botao from "../botao";
import Relogio from "./relogio";
import { TempoEmSegundos } from "../../common/utils/date";
import { Itarefa } from "../../tipos/tarefas";

import style from "./Cronometro.module.scss"
import { useState } from "react";

interface Props {
  selecionado: Itarefa | undefined
}

function Cronometro ({selecionado}: Props) {

  const [tempo, setTempo] = useState<number>()

  if(selecionado?.tempo) {
    setTempo(TempoEmSegundos(selecionado.tempo))
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Relogio/>
      </div>
      <Botao>
        Comecar
      </Botao>
    </div>
  )
}

export default Cronometro