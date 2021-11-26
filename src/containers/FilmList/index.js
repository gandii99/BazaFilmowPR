import React, {Component} from 'react';
import styled from 'styled-components';
import Rating from '../../components/newFilm/rating';
import Title from '../../components/newFilm/titleFilm';
import BanerFilm from '../../components/newFilm/baner';
import Description from '../../components/newFilm/description';

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    background: #eee;
    margin: 0 auto;
    flex-basis: 500px;
    height: 30vh;
    margin: 20px 0.5%;
    flex-shrink: shrink;
    flex-grow: 1;
    border: 4px solid #F2CC0C;
    border-radius: 50px;
    overflow: hidden;
`

const FilmData = styled.div`
    width: 50%;
    height: 10vh;
    padding: 1% 5%;
    text-align: left;

`
const ReadMore = styled.div`
    width: 80%;
    margin: 20px 0;
    border: 2px solid #000;
    border-radius: 10px;
    color: black;
    background: #F2CC0C;
    text-align: center;
    line-height: 32px;
    font-weight: bold;
    cursor: pointer;
`

class FilmList extends Component {

    render(){
        return (
            <Container>
                <BanerFilm />
                <FilmData>
                    <Title />
                    <Rating />
                    <Description />
                    <ReadMore> Czytaj więcej </ReadMore>
                </FilmData>
            </Container>
        )
    }
}

export default FilmList;