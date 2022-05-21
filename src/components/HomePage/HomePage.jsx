import s from './home-page.module.css'
import TrendingList from './TrendingList/TrendingList';


const HomePage = ({trending, onClick}) => {
  return (
      <div>
      <h1 className={s.heading}>Today`s Trending</h1>
      <TrendingList trending={trending} onClick={onClick}/>
    </div>
  );
};

export default HomePage;
