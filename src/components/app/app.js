import React, { Component } from 'react';
import './app.css';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import CharactersPage from '../pages/charactersPage/charactersPage';
import HousesPage from '../pages/housesPage/housesPage';
import BooksPage from '../pages/booksPage/booksPage';

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
          <CharactersPage />
          <HousesPage />
          <BooksPage />


        </Container>
      </>
    );
  }
}
