import React, {Component} from 'react';
import styled from 'styled-components';
import loupe from '../../file/loupe.png';

const FieldSearch = styled.div`
    height: 50%;
    width: 40%;
    display: flex;
    justify-content: space-between;
`

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
    cursor: pointer;
    background: #eee;
    border-radius: 8px;
`

class SearchArea extends Component {


    render(){

        console.log(this.props.setStateValue);

        return (
            <FieldSearch>
                <IconLoupe src={loupe} />
                <TextInput onChange={(e) => this.props.setDraftValue(e.target.value)} value={this.props.draftValue} type="text" placeholder="Szukaj filmów"/>
            </FieldSearch>
        )
    }
}

export default SearchArea;