import { useState } from "react"


const Formularios = () => {
  /*Version para formularios simples con pocas variables

    const [nombre, setNombre] = useState("");
    const [sabor, setSabor] = useState("");
    const [lenguaje, setLenguaje] = useState("");
    const [terminos, setTerminos] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("El formulario se ha enviado");
    }
    
  return (
  <>
  <h2>Formularios</h2>
  <form onSubmit={handleSubmit}>
    <label htmlFor="nombre">Nombre: </label>
    <input type="text" id="nombre"name="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/><br/>
  
  <p>Elije tu sabor JS favorito</p>
    <input type="radio" id="vanila" name="sabor" value="vanila" onChange={(e)=>setSabor(e.target.value)} defaultChecked/>
    <label htmlFor="vanila">vanila</label>
    <input type="radio" id="react" name="sabor" value="react" onChange={(e)=>setSabor(e.target.value)}/>
    <label htmlFor="react">react</label>
    <input type="radio" id="angular" name="sabor" value="angular" onChange={(e)=>setSabor(e.target.value)}/>
    <label htmlFor="angular">angular</label>
    <input type="radio" id="next" name="sabor" value="next" onChange={(e)=>setSabor(e.target.value)}/>
    <label htmlFor="next">next</label>
    <p>Elige tu lenguaje de programacion favorito</p>
    <select name="lenguaje" onChange={(e)=>setLenguaje(e.target.value)} defaultValue="">
        <option value="" >---</option>
        <option value="js">JavaScript</option>
        <option value="php">PHP</option>
        <option value="py">Python</option>
        <option value="go">GO</option>
        <option value="rb">Ruby</option>
    </select>
    <br/>
    <label>Acepto terminos y condiciones</label>
    <input type="checkbox" id="terminos" name="terminos" onChange={(e)=>setTerminos(e.target.checked)} />
  <br/>
  <input type="submit"/>
  </form>
  
  </>
  )
  */

//version más compleja con mas variables

const [form, setForm] = useState({});

const handleChange = (e)=>{
    setForm({
        ...form,
        [e.target.name]: e.target.value
    });
};

const handleChecked = (e)=>{
    setForm({
        ...form,
        [e.target.name]: e.target.checked
    });
};
 

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("El formulario se ha enviado");
    }
    
  return (
  <>
  <h2>Formularios</h2>
  <form onSubmit={handleSubmit}>
    <label htmlFor="nombre">Nombre: </label>
    <input type="text" id="nombre"name="nombre" value={form.nombre} onChange={handleChange}/><br/>
  
  <p>Elije tu sabor JS favorito</p>
    <input type="radio" id="vanila" name="sabor" value="vanila" onChange={handleChange} defaultChecked/>
    <label htmlFor="vanila">vanila</label>
    <input type="radio" id="react" name="sabor" value="react" onChange={handleChange}/>
    <label htmlFor="react">react</label>
    <input type="radio" id="angular" name="sabor" value="angular" onChange={handleChange}/>
    <label htmlFor="angular">angular</label>
    <input type="radio" id="next" name="sabor" value="next" onChange={handleChange}/>
    <label htmlFor="next">next</label>
    <p>Elige tu lenguaje de programacion favorito</p>
    <select name="lenguaje" onChange={handleChange} defaultValue="">
        <option value="" >---</option>
        <option value="js">JavaScript</option>
        <option value="php">PHP</option>
        <option value="py">Python</option>
        <option value="go">GO</option>
        <option value="rb">Ruby</option>
    </select>
    <br/>
    <label>Acepto terminos y condiciones</label>
    <input type="checkbox" id="terminos" name="terminos" onChange={handleChecked} />
  <br/>
  <input type="submit"/>
  </form>
  
  </>
  )
}

export default Formularios
