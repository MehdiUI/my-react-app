import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/LOGO.png'
import '../Styles/Nav.sass'

function Nav() {
  const location = useLocation()

  const isActiveLink = (path) => location.pathname === path

  return (
    <nav className="nav">
      <a href="/"><img src={logo} alt="Kasa logo" className="nav__logo" /></a>
      <ul className="nav__links">
        <li>
          <NavLink
            to="/"
            className={isActiveLink('/') ? 'nav__link nav__link--active' : 'nav__link'}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/a-propos"
            className={isActiveLink('/a-propos') ? 'nav__link nav__link--active' : 'nav__link'}
          >
            À propos
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
