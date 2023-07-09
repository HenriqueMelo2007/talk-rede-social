import { createContext, useState } from "react";






export const MeuContexto = createContext({})

export function ProvedorMeuContexto( { children } ) {

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