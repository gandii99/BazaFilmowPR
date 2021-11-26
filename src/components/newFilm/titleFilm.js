import React, {Component} from 'react';
import styled from 'styled-components';

const Text = styled.div`
font-family: 'Ubuntu Mono', 'roboto', 'sans-serif';
font-weight: bold;
font-size: 32px;

`

class Title extends Component {

    render(){
        return (
            <Text>Hellbound</Text>
        )
    }
}

export default Title;