import React, {Component} from 'react';
import styled from 'styled-components';

const Text = styled.div`
font-family: 'roboto', 'sans-serif';
`

class Description extends Component {

    render(){
        return (
            <Text> 
                Pozaziemskie istoty wydają krwawe wyroki i wysyłają ziemian do piekła, przyczyniając się do...
            </Text>
        )
    }
}

export default Description;