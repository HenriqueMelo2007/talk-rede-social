import { Link } from 'react-router-dom';
import './header.css'
import iconHamburguer from '../../assets/hamburguer-icon.png'
import { useState } from 'react';

export function Header() {

  const [showBtnIcon, setShowBtnIcon] = useState(true)
  const [showNav, setShowNav] = useState(false)


  function toggleShow () {
    setShowBtnIcon(!showBtnIcon)
    setShowNav(!showNav)
  }


  return (
    <header className='header'>

      <div className='boxLogo'>
        <img className='imgLogo' src="https://img.freepik.com/icones-gratis/juncao-t_318-533846.jpg?w=2000" alt="Logo Walk" />
        <h1 className='tittleLogo'>Talk</h1>
      </div>

      <div className="entrarMenu">

        {showBtnIcon && 
        <div className='divEntrarHamburguer'>
          <Link className='btnEntrar' to='/login'>Entrar</Link>
          <img onClick={toggleShow} className='iconHamburguer' src={iconHamburguer} alt="" />
        </div>}

        {showNav && 
        <nav>
        <ul className='listaHeader'>
          <li>
            <Link onClick={toggleShow} className='itemListaHeader' to='/'>Home</Link>
          </li>
          <li >
            <Link onClick={toggleShow} className='itemListaHeader' to='/perfil'>Perfil</Link>
          </li>
          <li >
            <Link onClick={toggleShow} className='itemListaHeader' to='/posts'>Posts</Link>
          </li>
          <li>
            <Link onClick={toggleShow} className='itemListaHeader' to='/amigos'>Amigos</Link>
          </li>
          <li>
            <Link onClick={toggleShow} className='itemListaHeader'  to='/adicionaramizade'>Adicionar amizades</Link>
          </li>
          <li onClick={toggleShow} className='itemListaHeader' id='fecharNav'>X</li>
        </ul>
      </nav>}

        
      </div>
    </header>
  )
}