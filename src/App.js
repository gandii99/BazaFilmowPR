import logo from './logo.svg';
import './App.css';
import MenuList from './containers/Menu';
import FilmsList from './containers/FilmList';
import Footer from './containers/Footer';
import styled from 'styled-components';
import './file/fonts.css';


const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: #eee;
  padding: 5px;
  justify-content: space-around;
  padding: 0 100px;
  padding-bottom: 100px;
`

const Text = styled.div`
  width: 100%;
  margin: 0 10%;
  height: 10vh;
  margin: 0;
  padding: 0 2%;
  text-align: center;
  line-height: 10vh;
  font-family: 'roboto', 'sans-serif';
  font-size: 32px;
  font-weight: bold;
`

function App() {
  return (
    <div className="App">
      <MenuList />
      <Content>
        <Text>Polecane</Text>
        <FilmsList />
        <FilmsList />
        <FilmsList />
        <FilmsList />
        <FilmsList />
        <FilmsList />
        <FilmsList />
        <FilmsList />
        <FilmsList />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
