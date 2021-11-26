import React, {Component} from 'react';
import styled from 'styled-components';
import logo from '../../file/logo.png';

const Container = styled.div`
    min-height: 6vh;
    background: #FFD70D;
    font-family: 'roboto', 'sans-serif';
    font-size: 24px;
    text-align: left;
    padding-left: 10px;
`

const Text = styled.div`
    padding-top: 15px;
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