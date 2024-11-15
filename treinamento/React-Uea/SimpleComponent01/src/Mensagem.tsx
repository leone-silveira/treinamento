import { Fragment } from "react/jsx-runtime"

interface IMensagemProps {
    Message: String

}
export function Mensagem({ Message }: IMensagemProps) {

    return (
        <Fragment>
            <h1>Exercício 1:</h1>
            <h2>{Message}</h2>
        </Fragment>
    )
}