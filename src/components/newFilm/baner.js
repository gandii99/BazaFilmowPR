import React, {Component} from 'react';
import styled from 'styled-components';
import logo from '../../file/baner.jpg';


const Baner = styled.img`
    height: 100%;
    transition: .5s linear;
    &:hover{
        transform: scale(1.1);
    }
`

class BanerFilm extends Component {

    render(){
        return (
            <Baner src={logo}/> 
        )
    }
}

export default BanerFilm;