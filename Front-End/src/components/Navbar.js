import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/homeSuperadmin" className="site-title">
        GameChallengerNet
      </Link>
      <ul>
        <CustomLink to="/homeSuperadmin/registrar">Registrar</CustomLink>
        <CustomLink to="/homeSuperadmin/veradmins">Ver Administradores</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}