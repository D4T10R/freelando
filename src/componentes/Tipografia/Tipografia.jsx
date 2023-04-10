import styled from "@emotion/styled"

const componentes = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body: 'p'
}

const estilos = {
    h1: `
        font-weight: 600;
        font-size: 40px;
        line-height: 49px;
    `,
    h2: `
        font-weight: 600;
        font-size: 32px;
        line-height: 39.01px
    `,
    h3: `
        font-weight: 500;
        font-size: 24px;
        line-height: 29.26px
    `,
    body: `
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
    `
}


export const Tipografia = ( { variante, componente, children } ) => {
    const tag = componentes[componente]
    const ComponenteUtilizado = styled[tag]`${estilos[variante]}`
    return (
        <ComponenteUtilizado>
            {children}
        </ComponenteUtilizado>
    )
}