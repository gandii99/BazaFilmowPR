import React, {Component} from 'react';
import styled from 'styled-components';
import logo from '../../file/logo.png';


const Logo = styled.img`
    width: 10%;
    max-height: 100%;
    margin-left: 3%;
`

class LogoArea extends Component {

    render(){
        return (
            <Logo src={logo}/> 
        )
    }
}

export default LogoArea;