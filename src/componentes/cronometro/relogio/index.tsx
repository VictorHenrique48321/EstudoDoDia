import style from "./Relogio.module.scss"

interface Props {
  tempo: number | undefined
}

function Relogio ({tempo = 0}: Props) { 

  const minutos = Math.floor(tempo / 60)
  const segundos = tempo % 60

  const [minutosDezana, minutosUnidade] = String(minutos).padStart(2, "0")
  const [segundosDezana, segundosUnidade] = String(segundos).padStart(2, "0")

  return (
    <>
      <span className={style.relogioNumero}>{minutosDezana}</span>
      <span className={style.relogioNumero}>{minutosUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundosDezana}</span>
      <span className={style.relogioNumero}>{segundosUnidade}</span>    
    </>
  )
}

export default Relogio