import styled from "@emotion/styled"

const LabelEstilizada = styled.label`
    display: block;
    width: 100%;
    font-weight: 400;
    font-size: 20px;
    line-height: 24.38px;
    box-sizing: border-box;
    color: ${props => props.theme.cores.neutras.a};
`

const InputEstilizado = styled.input`
    display: block;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    margin-top: ${props => props.theme.espacamentos.xs};
    border: 1px solid;
    border-color: ${props => props.theme.cores.neutras.a};
    border-radius: ${props => props.theme.espacamentos.s};
    background: ${props => props.theme.cores.braco};
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
`

export const CampoTexto = ( {titulo} ) => {
    return (
        <LabelEstilizada>
            {titulo}
            <InputEstilizado />
        </LabelEstilizada>
    )
}