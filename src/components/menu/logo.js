import React, {Component} from 'react';
import styled from 'styled-components';
import logo from '../../file/logo.png';


const Logo = styled.img`
    height: 180px;
    margin-left: 3%;
    &:hover{
        cursor: pointer;
    }
`

class LogoArea extends Component {

    render(){
        return (
            <Logo src={logo} /> 
        )
    }
}

export default LogoArea;