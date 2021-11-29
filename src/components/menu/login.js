import React, {Component} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';


const Button = styled.button`
    background: transparent;
    color: black;
    width: 100%;
    font-size: 1.7em;
    border: none;
    cursor: pointer;
`

const Container = styled.div`
    position: relative;
    width: 200px;
    margin: 0 15px;
    &:after {
        position: absolute;
        bottom: -8px;
        left: 10%;
        content: "";
        border: 0px solid black;
        width: 0%;
        transition: .3s linear;
      }

    &:hover:after {
        width: 80%;
        border: 2px solid black;
        background: black;v
      }
      
`




class LoginArea extends Component {

    render(){
        return (
            <Container>
                <Button> <FontAwesomeIcon icon={faSignInAlt}/> &nbsp;Zaloguj się </Button>
            </Container>
        )
    }
}

export default LoginArea;