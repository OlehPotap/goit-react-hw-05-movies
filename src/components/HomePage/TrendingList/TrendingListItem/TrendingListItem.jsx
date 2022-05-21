import { Link } from "react-router-dom";

const TrendingListItem = ({ id, title, onClick}) => {
    return(
        <li><Link onClick={()=>{onClick(id)}} to={`movies/${id}`}>{title}</Link></li>
    )
}

export default TrendingListItem;