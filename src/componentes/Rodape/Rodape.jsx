import styled from '@emotion/styled'
export const FotterEstilizado = styled.footer`
    background: ${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.xl};
    color: ${props => props.theme.cores.branco};
`

export const Rodape = () => {
    return (
        <FotterEstilizado>
            ta
        </FotterEstilizado>
    )
}