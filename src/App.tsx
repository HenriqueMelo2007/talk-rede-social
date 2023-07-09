import { useContext } from "react"
import { MeuContexto } from "./contexto/Contexto"



export function App() {

  const { teste } = useContext(MeuContexto)


  return (
    <>
      <h1>{teste}</h1>
    </>
  )
}