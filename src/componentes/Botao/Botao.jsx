import styled from "@emotion/styled"

const BotaoPrimario = styled.button`
    background: ${props => props.theme.cores.primarias.b};
    padding: 8px ${props => props.theme.espacamentos.s};
    border-radius: ${props => props.theme.espacamentos.s};
    color: ${props => props.theme.cores.neutras.c};
    font-weight: 700;
    font-size: ${props => props.theme.espacamentos.s};
    line-height: 20px;
    cursor: pointer;
    border: none;
    &:hover {
        background: ${props => props.theme.cores.dark.b};
    }
    &:focus {
        outline-color: ${props => props.theme.cores.dark.d};
    }
`

const BotaoSecundario = styled.button`
    background: transparent;
    color: ${props => props.theme.cores.primarias.b};
    border: 2px solid ${props => props.theme.cores.primarias.b};
    border-radius: ${props => props.theme.espacamentos.s};
    padding: ${props => props.theme.espacamentos.xs} ${props => props.theme.espacamentos.s};
    box-sizing: border-box;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    &:hover {
        border-color: ${props => props.theme.cores.dark.b};
        color: ${props => props.theme.cores.dark.b};
    }
    &:focus {
        outline-color: ${props => props.theme.cores.focus};
    }

`


export const Botao = ( { variante, children } ) => {
    if (variante === 'primaria') {
        return (
            <BotaoPrimario>
                {children}
            </BotaoPrimario>
        )
    }

    return (
        <BotaoSecundario>
            {children}
        </BotaoSecundario>
    )
}