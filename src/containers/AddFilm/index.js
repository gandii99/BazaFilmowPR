import styled from 'styled-components';
import background from '../../file/moviesBgc.jpg';
import addPhotoIcon from '../../file/addPhotoIcon.jpg'

const Container = styled.div`
    width: 100vw;
    min-height: 80vh;
    padding: 10vh 20vw 0 20vw;
    background-image: url(${background});
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    width: 60vw;
    min-height: 60vh;
    background-color: white;
`


const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Button = styled.button`
    border: 2px solid #666;
    height: 50px;
    margin: 30px 0;
    font-size: 20px;
    background-color: white;
    cursor: pointer;
`

const Input = styled.input`
    height: 50px;
    border: none;
    border-bottom: 2px solid grey;
    margin: 10px 0;
    font-size: 20px;
    padding-left: 10px;
    &:active{
        
    }
    &:focus{
        border: none;
    }
`


const BoxButton = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: auto;
`
const BoxInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    border-right: 2px solid #bbb;
    padding: 4% 6%;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 100%;
    padding: 2% 5%;

`
const AddFilmForm = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

const TextAreaPlace = styled.textarea`
    height: 200px;
    width: 100%;
    margin: 10px 0;
    border: none;
    border: 2px solid #bbb;
    font-size: 20px;
    padding: 10px;
`


const AddPict = styled.div`
    width: 120px;
    height: 140px;
    background-color: white;
    background-image: url(${addPhotoIcon});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
`


const Title = styled.div`
    font-size: 26px;
    margin-bottom: 30px;
    font-weight: bold;
`


const InputPict = styled.input`
    height: 50px;
    font-size: 20px;
    width: 80%;
    margin: auto;
`

const AddInfo = styled.div`
    width: 100%;
`

function AddFilm() {

  return (
    <Container>
        <Content>
            <Form>
                <AddFilmForm>
                    <Left>
                        <Title>Informacje o Fimie</Title>
                        
                        <BoxInput>
                            <Input type="text" placeholder='Tytuł Filmu'></Input>
                            <Input type="text" placeholder='Reżyser' ></Input>
                            <Input type="number" placeholder='Ocena' ></Input>
                            <Input type="text" placeholder='Aktorzy' ></Input>
                            <Input type="date" placeholder='Data produkcji' ></Input>
                        </BoxInput>
                        
                    </Left>
                    <Right>
                        <AddInfo>
                            <Title>Dodaj Opis Fimu</Title>
                            <TextAreaPlace placeholder='Opis filmu...'></TextAreaPlace>
                        </AddInfo>
                        <AddInfo>
                            <Title>Dodaj Zdjęcie</Title>
                            <InputPict type="file" ></InputPict>
                        </AddInfo>
                        
                    </Right>
                </AddFilmForm>
                <BoxButton>
                    <Button>Dodaj film</Button>
                </BoxButton>
            </Form>

        </Content>
    </Container>
  );
}

export default AddFilm;
