import { Link, Outlet, } from 'react-router-dom';
import style from '../headerMenu/headerMenu.module.css';
import {items} from "./items"


const HeaderMenu = () => {

  const headerName=items.map(items=>{
   return( <li key={items.id} className={style.navi_items}>
    <Link to={items.to}className={style.link} >{items.text}</Link>
    </li>)
  })
  return (
    <div className={style.container}>
      <ul className={style.list_Navi}>
      {headerName}
    
      </ul>
      <Outlet />
    </div>
  );
};

export default HeaderMenu;
