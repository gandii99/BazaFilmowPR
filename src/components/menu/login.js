import React, {Component} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const FloatBorder = styled.div`
    border-bottom: 4px solid black;
    width: 100%;
    transform: translate(-100%, 0);
    transition: 0.4s linear;
    
`

const Button = styled.button`
    background: transparent;
    color: black;
    width: 100%;
    font-size: 1.7em;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    
`
const Container = styled.div`
    position: relative;
    width: 10%;
    margin-right: 15px;
    &:hover ${FloatBorder}{
        transform: translate(0, 0);
    }
    overflow: hidden;
`




class LoginArea extends Component {

    render(){
        return (
            <Container>
                <Button> <FontAwesomeIcon icon={faSignInAlt} />Zaloguj się </Button>
                <FloatBorder></FloatBorder>
            </Container>
        )
    }
}

export default LoginArea;