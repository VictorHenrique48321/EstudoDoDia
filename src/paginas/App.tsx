import Formulario from '../componentes/formulario';
import Lista from '../componentes/lista';

import style from "./App.module.scss"

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario/>
      <Lista/>
    </div>
  );
}

export default App;
