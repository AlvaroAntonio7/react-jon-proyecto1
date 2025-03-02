import { useFetch } from "../hooks/useFetch"


const HooksPersonalizados = () => {
    
    let url = "https://pokeapi.co/api/v2/pokemon";
    let {data, loading, error} = useFetch(url);
  return (
   <>
    <h2>Hooks personalizados</h2>
    <h3>{JSON.stringify(loading)}</h3>
    <h3><mark>{JSON.stringify(error)}</mark></h3>
    <h3><code>{JSON.stringify(data)}</code></h3>
   </>
  )
}

export default HooksPersonalizados
