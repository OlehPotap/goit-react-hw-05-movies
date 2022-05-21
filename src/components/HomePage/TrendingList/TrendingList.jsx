import TrendingListItem from "./TrendingListItem/TrendingListItem";

const TrendingList = ({trending , onClick}) => {

    const ListEl = trending.map(el=>{
         return <TrendingListItem key={el.id} id={el.id} title={el.title} onClick={onClick} />
      })
    return (
        <ul>
            {ListEl}
    </ul>
    )
}

export default TrendingList;