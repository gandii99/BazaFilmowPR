import React, {Component} from 'react';
import styled from 'styled-components';
import loupe from '../../file/loupe.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const FieldSearch = styled.div`
    height: 50%;
    width: 40%;
    display: flex;
    justify-content: space-between;
`
// border-radius: 4px;
// border: none;
const IconLoupe = styled.img`
    max-width: 10%;
`

const TextInput = styled.input`
    height: 100%;
    flex-basis: 88%;
    border: none;    
    box-sizing: border-box;
    padding-left: 2%;
    font-family: FontAwesome;
    font-size: 20px;
`

class SearchArea extends Component {

    render(){
        return (
            <FieldSearch>
                <IconLoupe src={loupe} />
                <TextInput type="text" placeholder="Szukaj filmów"/>
                
            </FieldSearch>
        )
    }
}

export default SearchArea;