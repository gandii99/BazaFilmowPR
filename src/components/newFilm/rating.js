import React, {Component} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { farStarx as farStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Text = styled.div`
font-family: 'roboto', 'sans-serif';
font-size: 24px;
margin: 8px 0 4px;
color: black;
font-size: 14px;
`

const Container = styled.div`
    margin: 8px 0 8px;
    color: #ffc200;
`

class Rating extends Component {

    state = {
        rating: this.props.rating,
    }

    render(){
        return (
            <Container>
                <Text>Ocena: {this.state.rating}</Text>
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