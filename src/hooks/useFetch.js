//HOOKS PERSONALIZADOS
//llamar a los hooks useNombre con lower

import { useEffect, useState } from "react";

export const useFetch = (url)=>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        

        const getData = async(url)=>{
            try{
                let res = await fetch(url);
                if(!res.ok){
                    throw{
                        err:true,
                        status: res.status,
                        statusText:!res.statusText?"Ocurrio un error": res.statusText
                    };
                }
                let data = await res.json();
                setError({err:false});
                setData(data);
                setLoading(false);
            }catch(err){
                
                setError(err);
                setLoading(false);
            }
            
            
         

        }
        getData(url);

    }, [url]);

    //se puede evolver lo q sea objeto , arreglo o cualquier valor
    return {data, loading, error}//el valor y el tag son los mismos
}