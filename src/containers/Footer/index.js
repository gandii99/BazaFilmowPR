import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-height: 10vh;
    background: #FFD70D;
    font-family: 'roboto', 'sans-serif';
    font-size: 24px;
    text-align: center;
    padding-left: 10px;
    line-height: 10vh;
`

const Text = styled.div`

`


class Footer extends Component {

    render(){
        return (
            <Container>
                <Text>Copyrights © Radosław Urban | 2021</Text>
            </Container>
        )
    }
}

export default Footer;