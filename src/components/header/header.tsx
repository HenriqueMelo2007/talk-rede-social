import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/perfil'>Perfil</Link>
        </li>
        <li>
          <Link to='/posts'>Posts</Link>
        </li>
        <li>
          <Link to='/amigos'>Amigos</Link>
        </li>
        <li>
          <Link to='/adicionaramizade'>Adicionar amizades</Link>
        </li>
      </ul>
    </header>
  )
}