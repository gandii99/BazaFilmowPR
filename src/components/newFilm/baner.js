import React, {Component} from 'react';
import styled from 'styled-components';


const Baner = styled.img`
    min-width: 250px;
    width: 100%;
    transition: .5s linear;
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
    }
`

const Image = styled.div`
    width: 50%;
    overflow: hidden;
`

class BanerFilm extends Component {


    render(){
        console.log(this.props.src);
        return (
        <Image>
            <Baner src={this.props.src}/> 
        </Image>   
        )
    }
}

export default BanerFilm;