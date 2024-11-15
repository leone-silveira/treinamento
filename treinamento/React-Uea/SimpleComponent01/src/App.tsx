import { Mensagem } from "./Mensagem"
import { Saudacao } from "./Saudacao"

export function App() {
  return (
    <div>
      <Mensagem Message={"Esse é o primeiro exercicio do Tony!!"}/>
      <Saudacao />
      <Saudacao nome="Luiza Barreto" idade={17} />
      <Saudacao nome="Leone Silveira" idade={27} />

    </div>
  )
}