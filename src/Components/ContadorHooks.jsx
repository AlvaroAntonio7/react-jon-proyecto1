import { useState } from "react"

const ContadorHooks = () => {
    //Los hooks tienen la forma const [valor, setValor] = useState(valorInicial)
    const [contador, setContador] = useState(0);

    const sumar = ()=>setContador(contador+1)
    const restar = ()=>setContador(contador-1)
    return (
    <>
     <h2>Hooks use-state</h2>
     <button onClick={restar}>-</button>
     <button onClick={sumar}>+</button>
     
     <h3>{contador}</h3>
    </>
    )
  }
  
  export default ContadorHooks