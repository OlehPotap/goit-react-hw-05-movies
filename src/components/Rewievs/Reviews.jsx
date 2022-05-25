import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getReview } from "shared/services/Movies"
import style from "./reviews.module.css"
const RewiewOfFilm=()=>{
    const {id}=useParams();
    const [rewiew,setRewiew]=useState({
        rewiew: [],
        error: null,
      });
    useEffect(()=>{
        const fetchRewiew=async()=>{
            try {
                const review= await getReview(id)
            setRewiew(prevState=>{
                return{
                    ...prevState,
                    rewiew:review.results
                }
            })
            } catch (err) {
                setRewiew(prevState => {
                    return {
                      ...prevState,
                      error: err.message,
                    };
                  });
            }
        }   
        fetchRewiew()
    },[id])
     console.log(rewiew.rewiew);
    const textRewiew=rewiew.rewiew.map(item=>{
        return (
            
            <li key={item.id} className={style.post}>
                <p>author:{item.author}</p>
                <p>{item.content}</p>
            </li>
        )
    })
     return (
       
     <ul>
          {rewiew.error && <p>Что-то пошло не так</p>}
         {textRewiew}
     </ul>)
}
export default RewiewOfFilm