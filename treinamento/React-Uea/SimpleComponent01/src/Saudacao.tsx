import { Fragment } from "react/jsx-runtime";

interface ISaudacaoProps {
    nome?: string,
    idade?: number,
}
export function Saudacao({ nome = "Por favor Forneça um nome", idade }: ISaudacaoProps) {
    const ConditionalPhrase = idade !== (undefined) ?
                                idade >= 18 ?
                                "Maior de Idade" : "Menor de Idade":
                                "Não foi possível calcular"
    return (
        <Fragment>
            <p > Nome:  {nome}</p>
            <p> Idade : {idade}</p>
            <p> Maioridade: {ConditionalPhrase}</p>
            <p>_______________________________________</p>
        </Fragment>
    )
}