import { NavLink } from 'react-router-dom'
import logo from '../assets/LOGO.png'
import '../Styles/Nav.sass'

function Nav() {
  return (
    <nav className="nav">
      <img src={logo} alt="Kasa logo" className="nav__logo" />
      <ul className="nav__links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/a-propos"
            className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}
          >
            À propos
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
