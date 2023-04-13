import styled from '@emotion/styled'

import logo from './Logo.svg'
import iconTwitch from './Icons/Twitch.svg'
import iconTwitter from './Icons/Twiter.svg'
import iconWhatsapp from './Icons/Whatsapp.svg'
import iconIntagram from './Icons/Instragam.svg'

export const FotterEstilizado = styled.footer`
    background: ${props => props.theme.cores.primarias.a};
    color: ${props => props.theme.cores.branco};
    padding: ${props => props.theme.espacamentos.m} ${props => props.theme.espacamentos.xl};
    display: flex;
    justify-content: space-between;

    .lista-icones {
        display: flex;
        list-style: none;
        justify-content: space-evenly;
        padding: 0; 
    }

    div {
        text-align: center;
        color: ${props => props.theme.cores.neutras.c};
    }

    div p {
        
    }
`

export const Rodape = () => {
    return (
        <FotterEstilizado >
            <div>
                <img src={logo} alt="Logo do freelando" />
                <p>Desenvolvido por Datior.</p>
            </div>
            <div>
                <p>acesse minhas redes:</p>
                <ul className='lista-icones'>
                    <li>
                        <a><img src={iconTwitter}/></a>
                    </li>
                    <li>
                        <a><img src={iconTwitch}/></a>
                    </li>
                    <li>
                        <a><img src={iconIntagram}/></a>
                    </li>
                    <li>
                        <a><img src={iconWhatsapp}/></a>
                    </li>
                </ul>
            </div>
        </FotterEstilizado>    
        
    )
}