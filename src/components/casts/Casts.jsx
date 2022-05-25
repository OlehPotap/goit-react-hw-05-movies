import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCasts } from "shared/services/Movies";
import style from "../casts/casts.module.css"
const CastsOfFilm=()=>{
    const {id}=useParams();
    const [casts,setCasts]=useState({
        casts:[],
        error:null
    });
    
    useEffect(()=>{
        const fetchCasts=async()=>{
            try {
                
                const singleMovie= await getCasts(id)
                console.log(singleMovie);
                setCasts(prevState=>{
                    return{
                        ...prevState,
                        casts:singleMovie.cast
                    }
                })
            } catch (error) {
                setCasts(prevState=>{
                return{
                    ...prevState,
                    error: error.message,
                }
                })
            }
           
         }
         fetchCasts()
         
     },[id])
     
    const humansCasts=casts.casts.map(item=>{
        return( 
        <li key={item.id} className={style.humans}>
         <p>{item.name}</p><img src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} alt={item.character} width="200px" /></li>
        )
    })
    return(<ul className={style.castList}>
         {casts.error && <p>Что-то пошло не так</p>}
        {humansCasts}
    </ul>)
}

export default CastsOfFilm