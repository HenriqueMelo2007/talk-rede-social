import { Link } from "react-router-dom";
import './login.css'

export function Login () {
  return (
    <div className="containerLogin">
      <div className="boxLogin">

        <h2 className="loginTittle">Logar</h2>

        <div className="boxLoginInputs">
          <input placeholder="Usuário" className="inputLoginText inputLogin" type="text" />
          <input placeholder="Senha" className="inputLoginPassword inputLogin" type="password" />
          <span className="esqueceuSenha">Esqueceu sua senha?</span>
        </div>

        <div className="boxLoginBtn">
          <Link to='/'>Entrar</Link>
        </div>

        <div className="boxLoginCadastro">
          <p>Não possui conta?</p>
          <span>Cadastre-se</span>
        </div>
      </div>

    </div>
  )
}