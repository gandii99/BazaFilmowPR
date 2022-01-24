import styled from 'styled-components';
import { useState } from 'react';
import './signin.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import background from '../../file/moviesBgc.jpg';
import axios from 'axios';

const Container = styled.div`
  width: 100vw;
  min-height: 80vh;
  background: white;
  padding: 10vh 20vw 0 20vw;
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.8)
    ),
    url(${background});
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 60vw;
  min-height: 60vh;
  // border: 4px solid #F2CC0C;
  background-color: white;
`;

const Asside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  height: 60vh;
  background: #111;
`;

const Feature = styled.div``;

const AssideTitle = styled.div`
  font-size: 26px;
  color: #c2ce1f;
  font-weight: bold;
  text-align: left;
  padding: 0 6%;
`;
const AssideDescription = styled.div`
  font-size: 18px;
  color: #ddd;
  padding: 10px 20%;
  text-align: left;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 7% 5% 7%;
  justify-content: space-between;
`;

const Button = styled.button`
  border: 2px solid #666;
  height: 50px;
  margin: 10px 0;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
`;

const Input = styled.input`
  height: 50px;
  border: none;
  border-bottom: 2px solid grey;
  margin: 10px 0;
  font-size: 20px;
  padding-left: 10px;
  &:active {
  }
  &:focus {
    border: none;
  }
`;
const Text = styled.div`
  font-family: sans-serif;
  font-size: 18px;
  height: 30px;
  padding: 5px 0;
`;

const Title = styled.div`
  font-size: 26px;
  margin-bottom: 30px;
  font-weight: bold;
`;

const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ErrorMessage = styled.div`
  height: auto;
  width: 100%;
  font-size: 24px;
  font-family: robot, sans-serif;
  margin: 10px 0;
  padding: 10px 20px;
  background: white;
  text-align: center;
  // border: 2px solid #ddd;
  border-radius: 10px;
  color: red;
`;

export const api = axios.create({
  baseURL: 'https://pr-movies.herokuapp.com/api',
});

function SignIn(props) {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInUser = async (event) => {
    try {
      event.preventDefault();
      const tok = await api.post('/user/auth', { login: name, password });
      props.setToken(tok.data.token);
      navigate('/');
      setName('');
      setPassword('');
    } catch (err) {
      console.log(err);
      setError('Wystąpił problem z logowaniem!');
    }
  };

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSignInUser}>
          <BoxInput>
            <ErrorMessage>{error}</ErrorMessage>
            <Title> ZALOGUJ SIĘ </Title>
            <Input
              type="text"
              placeholder="Nazwa użytkownika"
              value={name}
              onChange={(evt) => {
                setName(evt.target.value);
              }}
            ></Input>
            <Input
              type="text"
              placeholder="Hasło"
              value={password}
              onChange={(evt) => {
                setPassword(evt.target.value);
              }}
            ></Input>
          </BoxInput>
          <BoxButton>
            <Button type="submit">Zaloguj się</Button>
            <Text>lub</Text>
            <Link to="/signup" className="link">
              <p className="text">Zarejestruj się</p>
            </Link>
          </BoxButton>
        </Form>
        <Asside>
          <Feature>
            <AssideTitle>
              <FontAwesomeIcon icon={faCompass} />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ODKRYWAJ NOWE FILMY
            </AssideTitle>
            <AssideDescription>
              Otrzymuj rekomendacje filmów, które są w Twoim guście. Porównuj
              swój gust z gustem znajomych.
            </AssideDescription>
          </Feature>

          <Feature>
            <AssideTitle>
              <FontAwesomeIcon icon={faUsers} />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SPRAWDZAJ OCENY ZNAJOMYCH
            </AssideTitle>
            <AssideDescription>
              Zobacz, jak oceniają filmy Twoi znajomi,dyskutuj z nimi o kinie.
            </AssideDescription>
          </Feature>
          <Feature>
            <AssideTitle>
              <FontAwesomeIcon icon={faStarHalfAlt} />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OCENIAJ FILMY I SERIALE
            </AssideTitle>
            <AssideDescription>
              Twórz bibliotekę obejrzanych tytułów i tych, które chcesz
              zobaczyć.
            </AssideDescription>
          </Feature>
        </Asside>
      </Content>
    </Container>
  );
}

export default SignIn;
