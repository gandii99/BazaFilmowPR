import styled from 'styled-components';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import hellboundBaner from '../../file/hellboundBaner.jpeg';
import Description from '../../components/newFilm/description';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import NewActor from '../../components/newActor';
import longbaner from '../../file/longbaner.jpg'


const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 80vh;
    background-color: yellow;
`

const Content = styled.div`
    width: 80vw;
    min-height: 80vh;
    background-color: #000;
    padding: 2% 2%;
`

const AssideActors = styled.div`
    background-color: #000;
    width: 20vw;
    min-height: 80vh;
    padding: 2% 0;
`

const Baner = styled.div`
    width: 100%;
    background-color: #000;
    overflow: hidden;
`

const Image = styled.img`
    width: 100%;
    height: auto;
`

const DescriptionPlace = styled.div`
    background: #000;
    padding: 40px 30px;
`


const Desc = styled.p`
    color: white;
    text-align: left;
    margin-top: 30px;
    font-size: 20px;
    text-align: justify;
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
`
const Title = styled.p`
    font-size: 56px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 10px; 
    text-align: left;
    width: 80%;
`

const Rating = styled.div`
    width: 20%;
    height: 100px;
    color: yellow;
    text-align: left;
    font-size: 42px;
`
const Score = styled.div`
    font-size: 16px;
`


function Details() {

  return (
    <Container>
        <Content>
            <Baner>
                <Image src={longbaner}></Image>
            </Baner>
            <DescriptionPlace>
                <Header>
                    <Title>Hellbound</Title>
                    <Rating>
                        <div>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfAlt} />
                        </div>
                        <Score>Ocena: 4.6</Score>
                    </Rating>
                </Header>
                <Desc>Pozaziemskie istoty wydają krwawe wyroki i wysyłają ziemian do piekła, przyczyniając się do powstania grupy wyznaniowej opartej na idei boskiej sprawiedliwości.
                Pozaziemskie istoty wydają krwawe wyroki i wysyłają ziemian do piekła, przyczyniając się do powstania grupy wyznaniowej opartej na idei boskiej sprawiedliwości.
                Pozaziemskie istoty wydają krwawe wyroki i wysyłają ziemian do piekła, przyczyniając się do powstania grupy wyznaniowej opartej na idei boskiej sprawiedliwości.
                </Desc>
            </DescriptionPlace>
        </Content>
        <AssideActors>
            <NewActor />
            <NewActor />
            <NewActor />

        </AssideActors>
        

    </Container>
  );
}

export default Details;
