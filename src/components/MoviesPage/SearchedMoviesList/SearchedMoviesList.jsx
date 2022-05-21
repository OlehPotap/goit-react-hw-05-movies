import { Link } from "react-router-dom"

const SearchedMovieList = ({results, onClick}) => {
    const listItem = results.map((el)=>{
      return  <li onClick={()=>{onClick(el.id)}} key={el.id}><Link to={`${el.id}`}>{el.title}</Link></li>
    })
    return (
        <ul>
            {listItem}
        </ul>
    )
}

export default SearchedMovieList;