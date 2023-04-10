import styled from "@emotion/styled"

const HeaderEstilizado = styled.header`
    background: ${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.m};
`

export const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <h1>teste</h1>
        </HeaderEstilizado>
    )
}