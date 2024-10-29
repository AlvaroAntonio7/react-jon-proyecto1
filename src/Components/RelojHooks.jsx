import { useEffect } from "react"
import { useState } from "react"

function Reloj({hora}){
    return <h3>{hora}</h3>
}

const RelojHooks = () => {
    
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false)

const tictac = (valor) =>{
    setVisible(valor);
};

useEffect(()=>{
    let temporizador;
    if(visible){
        temporizador=setInterval(()=>{
            setHora(new Date().toLocaleTimeString())
        }, 1000)
    }else{
        clearInterval(temporizador)
    }

    return ()=>{
        //Desmontaje
        clearInterval(temporizador)
    };
}, [visible])
    return (
    <>
    <h2>reloj con Hooks</h2>
    {visible && <Reloj hora={hora}/>}
    <button onClick={()=>tictac(true)}>iniciar</button>
    <button onClick={()=>tictac(false)}> detener</button>
    </>
  )
}

export default RelojHooks
