import styled from "@emotion/styled"

import logo from './Logo.svg'

const HeaderEstilizado = styled.header`
    background: ${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.m} ${props => props.theme.espacamentos.xl};
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        font-size: ${props => props.theme.espacamentos.m};
        color: ${props => props.theme.cores.neutras.c};
        line-height: ${props => props.theme.espacamentos.m};
    }
`

export const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src={logo} alt="Logo do Freelando" />
            <a>Login</a>
        </HeaderEstilizado>
    )
}