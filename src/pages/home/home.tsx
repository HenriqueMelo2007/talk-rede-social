import './home.css'

export function Home () {
  return (
    <div className="postHome">

      <header className='headerHome'>
        <div className="fotoPerfil"></div>
        <h2 className='nomeUsuario'>Usuário123</h2>
      </header>

      <textarea cols="30" rows="10"></textarea>

      <div className="publicar">
        <p>10/07/2023</p>
        <button className='btnPublicar'>Publicar</button>
      </div>

    </div>
  )
}