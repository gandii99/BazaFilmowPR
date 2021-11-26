import React, {Component} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { farStarx as farStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Text = styled.div`
font-family: 'roboto', 'sans-serif';
font-size: 24px;
margin: 8px 0 4px;
`

const Container = styled.div`
    margin: 8px 0 8px;
`

class Rating extends Component {

    render(){
        return (
            <Container>
                <Text> Ocena: 4.5 </Text>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
            </Container>
        )
    }
}

export default Rating;