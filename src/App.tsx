import { Header } from "./components/header/header";
import { Route, Routes } from 'react-router-dom';
import { Home } from "./pages/home/home";
import { Perfil } from "./pages/perfil/perfil";
import { Amigos } from "./pages/amigos/amigos";
import { Posts } from "./pages/posts/posts";
import { AdicionarAmizade } from "./pages/adicionar-amizade/adicionaramizade";


export function App() {



  return (
    <>

    <Header></Header>

    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/perfil" Component={Perfil}></Route>
      <Route path="/posts" Component={Posts}></Route>
      <Route path="/amigos" Component={Amigos}></Route>
      <Route path="/adicionaramizade" Component={AdicionarAmizade}></Route>
    </Routes>

      

    </>
  )
}