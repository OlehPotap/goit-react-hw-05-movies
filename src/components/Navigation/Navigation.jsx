import { NavLink } from 'react-router-dom';
import s from './navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
