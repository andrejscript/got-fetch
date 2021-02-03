import React, { Component } from 'react';
import './app.css';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import CharacterPage from '../characterPage/characterPage';

import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';
import gotService from '../../services/gotService';

export default class App extends Component {
  gotService = new gotService();

  state = {
    showRandomChar: true,
    error: false,
  };

  toggleRandomChar = () => {
    this.setState({
      showRandomChar: !this.state.showRandomChar,
    });
  };

  render() {
    const char = this.state.showRandomChar ? <RandomChar /> : null;

    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>{char}</Col>
          </Row>
          <button 
            className={'toggle-btn'} 
            onClick={this.toggleRandomChar}>
            Toggle Random Char
          </button>
          <CharacterPage />
{/* 
           <Row>
            <Col md='6'>
              <ItemList 
                onCharSelected={this.onCharSelected}
                getData={this.gotService.getAllHouses} 
                renderItem={({name, words}) => `${name} ${words}`}
                />
            </Col>
            <Col md='6'>
              <CharDetails charId={this.state.selectedChar} />
            </Col>
          </Row>
        
          <Row>
            <Col md='6'>
              <ItemList 
                onCharSelected={this.onCharSelected} 
                getData={this.gotService.getAllBooks} 
                renderItem={({name, publisher}) => `${name} (${publisher})`}
                />
                
            </Col>
            <Col md='6'>
              <CharDetails charId={this.state.selectedChar} />
            </Col>
          </Row> */}
        </Container>
      </>
    );
  }
}
