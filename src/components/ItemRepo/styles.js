import styled from 'styled-components'

export const ItemContainer = styled.div`
    width: 80%;
    
    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p{
        font-size: 16px;
        color: #FAFAFA;
        margin-bottom: 40px;
    }
    
    a{
        padding: 20px;
        text-decoration: none;
        color: #fff;
        background-color: #1af;
    }

    a.remove{
        background-color: #f10;
        margin-left: 20px;
    }

    a:hover{
        opacity: 0.8;
    }

    hr {
        color: #FAFAFA60;
        margin: 40px 0px;
    }
`