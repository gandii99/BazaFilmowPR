import React, {Component} from 'react';
import styled from 'styled-components';
import LoginArea from '../../components/menu/login';
import LogoArea from '../../components/menu/logo';
import SearchArea from '../../components/menu/search';


const Container = styled.div`
    background: #F2CC0C;
    margin: 0 auto;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`

class MenuList extends Component {


    render(){
        return (
            <Container>
                <LogoArea />
                <SearchArea draftValue={this.props.draftValue} setDraftValue={this.props.setDraftValue} />
                <LoginArea />
            </Container>
        )
    }
}

export default MenuList;