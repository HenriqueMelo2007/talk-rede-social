import { Link } from 'react-router-dom';
import './header.css'

export function Header() {
  return (
    <header className='header'>

      <div className='boxLogo'>
        <img className='imgLogo' src="https://cdn.discordapp.com/attachments/1126699315247722506/1127608165480018030/w-logo-rose.gif" alt="Logo Walk" />
        <h1 className='tittleLogo'>Walk</h1>
      </div>

      <div className="entrarMenu">
        <button className='btnEntrar'>Entrar</button>

        <nav>
          <ul className='listaHeader'>
            <li>
              <Link className='itemListaHeader' to='/'>Home</Link>
            </li>
            <li >
              <Link className='itemListaHeader' to='/perfil'>Perfil</Link>
            </li>
            <li >
              <Link className='itemListaHeader' to='/posts'>Posts</Link>
            </li>
            <li>
              <Link className='itemListaHeader' to='/amigos'>Amigos</Link>
            </li>
            <li>
              <Link className='itemListaHeader'  to='/adicionaramizade'>Adicionar amizades</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}