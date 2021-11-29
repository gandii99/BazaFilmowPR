import React, {Component} from 'react';
import styled from 'styled-components';

const Text = styled.div`
font-family: 'Ubuntu Mono', 'roboto', 'sans-serif';
font-weight: bold;
font-size: 26px;
`

class Title extends Component {

    state = {
        title: this.props.title,
    }

    render(){
        return (
            <Text>{this.props.title}</Text>
        )
    }
}

export default Title;