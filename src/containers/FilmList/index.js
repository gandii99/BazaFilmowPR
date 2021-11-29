import React, {Component} from 'react';
import styled from 'styled-components';
import Rating from '../../components/newFilm/rating';
import Title from '../../components/newFilm/titleFilm';
import BanerFilm from '../../components/newFilm/baner';
import Description from '../../components/newFilm/description';

const Container = styled.div`
    display: flex;
    flex-shrink: shrink;
    flex-grow: 1;
    flex-wrap: wrap;
    flex-basis: 500px;
    box-sizing: border-box;
    margin: 20px 0.5%;
    height: 30vh;
    max-width: 600px;
    background: #eee;
    border: 4px solid #F2CC0C;
    border-radius: 50px;
    overflow: hidden;
`

const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: #eee;
  padding: 5px;
  justify-content: space-around;
  align-items: center;
  padding: 60px 100px;
  min-height: 80vh;
`

const FilmData = styled.div`
    position: relative;
    box-sizing: border-box;
    min-width: 250px;
    width: 50%;
    text-align: left;
    padding: 10px 10px;
`
const ReadMore = styled.div`
    position: absolute;
    top: 24vh;
    left: 6%;
    width: 80%;
    border: 2px solid black;
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
            <Content>
            {this.props.films.map( film => {
                let str = '';
                if(this.props.draftValue.length > 0){
                    for(let i=0; i<this.props.draftValue.length; i++ ){
                        str += film.title[i];
                    }
                    if(str.toUpperCase() === this.props.draftValue.toUpperCase()){
                        return(
                            <Container>
                                <BanerFilm src={film.src}/>
                                <FilmData>
                                    <Title title={film.title}/>
                                    <Rating rating={film.rating}/>
                                    <Description description={film.description}/>
                                    <ReadMore> Czytaj więcej </ReadMore>
                                </FilmData>
                            </Container>
                        )
                    }
                }else{
                    return(
                        <Container>
                            <BanerFilm src={film.src} />
                            <FilmData>
                                <Title title={film.title}/>
                                <Rating rating={film.rating}/>
                                <Description description={film.description}/>
                                <ReadMore> Czytaj więcej </ReadMore>
                            </FilmData>
                        </Container>
                    )
                }
            }
            
            )}
            
            </Content>
        )
    }
}

export default FilmList;