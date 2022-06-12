import Botao from "../botao";
import Relogio from "./relogio";
import { TempoEmSegundos } from "../../common/utils/date";
import { Itarefa } from "../../tipos/tarefas";

import style from "./Cronometro.module.scss"
import { useEffect, useState } from "react";

interface Props {
  selecionado: Itarefa | undefined,
  finalizarTarefa: () => void
}

function Cronometro ({selecionado, finalizarTarefa}: Props) {

  const [tempo, setTempo] = useState<number>()

  useEffect(() => {
    if(selecionado?.tempo) {
      setTempo(TempoEmSegundos(selecionado.tempo))
    }
  }, [selecionado])

  function regressiva (contador: number = 0) {
    setTimeout(() => {
      if(contador > 0) {
        setTempo(contador - 1)
        return regressiva(contador - 1)
      }
      finalizarTarefa()
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo}/>
      </div>
      <Botao onClick={() => regressiva(tempo)}>
        Comecar
      </Botao>
    </div>
  )
}

export default Cronometro