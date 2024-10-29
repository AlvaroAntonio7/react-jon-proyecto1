import { useEffect } from "react"
import { useState } from "react"

function Pokemon({avatar, name}){
    return(
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    );
}


const AjaxHooks = () => {
    
    const [pokemons, setPokemons] = useState([]);

    /*
    useEffect(()=>{
        let url = "https://pokeapi.co/api/v2/pokemon";
        fetch(url)
        .then((res)=>res.json())
        .then((json)=>{
            json.results.forEach((el)=>{
                fetch(el.url)
                .then((res) => res.json())
                .then((json)=>{
                    let pokemon = {
                        id:json.id,
                        name:json.name,
                        avatar:json.sprites.front_default
                    };
                    //let pokemons = [...this.state.pokemons, pokemon];
                    setPokemons((pokemons)=> [...pokemons, pokemon]);
                })
            })
        })

    }, []);
*/
    
    

    //otra forma con async
    useEffect(()=>{//No se recomienda colocar el async aqui

        const getPokemons = async(url)=>{//el async se agrega aqui
            let res = await fetch(url),
            json = await res.json();
           // console.log(json.results);
            json.results.forEach(async (el)=>{
                
                let res = await fetch(el.url),
                json = await res.json();
               
                    let pokemon = {
                        id:json.id,
                        name:json.name,
                        avatar:json.sprites.front_default
                    };
                    //let pokemons = [...this.state.pokemons, pokemon];
                    setPokemons((pokemons)=> [...pokemons, pokemon]);
                
            })

        }
        getPokemons("https://pokeapi.co/api/v2/pokemon");

    }, []);
    
  return (
    <>
    <h2>Ajax con hooks</h2>
    {
        pokemons.length===0?(<h3>Cargando...</h3>):
        (
            pokemons.map((el)=>(
                <Pokemon key={el.id} avatar={el.avatar} name={el.name} />
            ))
        )
    }
    </>
  )
}

export default AjaxHooks
