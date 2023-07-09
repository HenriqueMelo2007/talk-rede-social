import { createContext, useState } from "react";


export const MeuContexto = createContext({})

interface propsProvedorMeuContexto {
  children: JSX.Element
}

export function ProvedorMeuContexto( { children }: propsProvedorMeuContexto ) {

  const [teste, setTeste] = useState('contexto funcionando')

  const dadosContexto = {
    teste
  }

  return (

    <MeuContexto.Provider value={dadosContexto}>
      {children}
    </MeuContexto.Provider>

  )
}