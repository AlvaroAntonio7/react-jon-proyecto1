import { useEffect } from "react"
import { useState } from "react"




const ScrollHooks = () => {

    const [scrollY, setScrollY] = useState(0)
    useEffect(()=>{ //todo lo que esta dentro del arrow se ejecuta
       // console.log("Fase de Actualizacion")
        const detectarScroll = () => setScrollY(window.pageYOffset);
        window.addEventListener("scroll", detectarScroll);
    }, [scrollY]);//en este caso se puede dejar con [], [] tambien hace referencia a solo la fase de montaje
    
    /*
  useEffect(()=>{
    return ()=>{
        //esto es desmontaje y puede servir para quitar suscripcionjes, reiniiar valores, contadores, etc
    }
  });
  */
    return (
    <>
    <h2>Hooks -useEfect</h2>
    <p>Scroll Y del navegador {scrollY}px</p>
    </>
  )
}

export default ScrollHooks
