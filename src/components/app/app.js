import React, { Component } from 'react';
import './app.css';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import CharactersPage from '../pages/charactersPage/charactersPage';
import HousesPage from '../pages/housesPage/housesPage';
import BooksPage from '../pages/booksPage/booksPage';
import BooksItem from '../pages/booksItem/booksItem';
import gotService from '../../services/gotService';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
      <Router>
        <div className='app'>
          <Container>
            <Header />
          </Container>
          <Container>
            <Row>
              <Col lg={{ size: 5, offset: 0 }}>{char}</Col>
            </Row>
            <button className={'toggle-btn'} onClick={this.toggleRandomChar}>
              Toggle Random Char
            </button>
            <Switch>
              <Route path='/' exact component={() => <h1>hello fuckers!</h1>} />
              <Route path='/characters' component={CharactersPage} />
              <Route path='/houses'>
                <HousesPage />
              </Route>
              <Route path='/books' exact component={BooksPage} />
              <Route
                path='/books/:id'
                render={({ match }) => {
                  const { id } = match.params;
                  return <BooksItem bookId={id} />;
                }}
              />
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}
