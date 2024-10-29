//Son usadas para componentes donde no se usan los estados para no tener que renderizar todo

import { useRef } from "react"

const Referencias = () => {
  let refMenu = useRef(),
  refMenuBt = useRef();

  const handleToggleMenu = ()=>{
    if(refMenuBt.current.textContent === "Menu"){
        refMenuBt.current.textContent="Cerrar";
        refMenu.current.style.display= "block";
    }else{
        refMenuBt.current.textContent="Menu";
        refMenu.current.style.display="none"
    }

  }
    return (
  <>
    <h2>REFERENCIAS</h2>
    <button  ref={refMenuBt} onClick={handleToggleMenu}>Menu</button>
    <nav id="menu" ref={refMenu} style={{display:"none"}}>
        <a href="#">seccion 1</a>
        <br />
        <a href="#">seccion 2</a>
        <br />
        <a href="#">seccion 3</a>
        <br />
        <a href="#">seccion 4</a>
        <br />
        <a href="#">seccion 5</a>
        <br />
    </nav>
  </>
  )
}

export default Referencias
