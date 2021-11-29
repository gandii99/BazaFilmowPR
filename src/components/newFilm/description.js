import React, {Component, useState} from 'react';
import styled from 'styled-components';

const Text = styled.div`
font-family: 'roboto', 'sans-serif';
font-size: 16px;
`

class Description extends Component {


    state = {
        description: this.props.description,
    }

    render(){
        let text = '';
        let i = 150;
        for(i; this.state.description[i] !== ' ' ; i--){    
        }  
        text =  this.state.description.slice(0,i);
        this.state.description[i] === '.' ? text +='..' : text += '...';
        
        return (
            <Text>
                {text}
            </Text>
            
        )
    }
}

export default Description;