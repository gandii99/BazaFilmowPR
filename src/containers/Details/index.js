import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 1%;
  padding-bottom: 1%;
  height: 80vh;
  background-color: white;
`;

const Baner = styled.div`
  height: 100%;
  background-color: #000;
  overflow: hidden;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
`;

const DescriptionPlace = styled.div`
  display: grid;
  grid-template-rows: 2fr 5fr;
  background-color: #eee;
  width: 65%;
  padding: 40px 30px;
`;

const Desc = styled.p`
  color: white;
  text-align: left;
  margin-top: 30px;
  font-size: 24px;
  text-align: justify;
  color: #222;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
`;
const Title = styled.p`
  font-size: 44px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 10px;
  text-align: left;
  width: 70%;
  color: #222;
`;

const Rating = styled.div`
  width: 30%;
  height: 100px;
  color: #ffd700;
  text-align: left;
  font-size: 42px;
  color: #000;
`;
const Score = styled.div`
  font-size: 16px;
`;

function Details() {
  const { id } = useParams();
  const [filmDetail, setFilmDetail] = useState('');

  useEffect(() => {
    axios
      .get('https://pr-movies.herokuapp.com/api/movies/' + id)
      .then((res) => {
        console.log('data', res.data);
        setFilmDetail(res.data);
      });
  });

  return (
    <Container>
      <Baner>
        <Image src={filmDetail.image}></Image>
      </Baner>
      <DescriptionPlace>
        <Header>
          <Title>{filmDetail.title}</Title>
          <Rating>
            <div>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
            <Score>Ocena: 5.4</Score>
          </Rating>
        </Header>
        <Desc>{filmDetail.content}</Desc>
      </DescriptionPlace>
    </Container>
  );
}

export default Details;
