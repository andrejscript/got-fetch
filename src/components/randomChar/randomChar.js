import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import './randomChar.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

export default class RandomChar extends Component {
  gotService = new gotService();

  state = {
    char: {},
    showRandomChar: true,
    error: false,
    loading: true,
  };

  toggleRandomChar = () => {
    this.setState({
      showRandomChar: !this.state.showRandomChar,
    });
  };

  updateChar = () => {
    const id = Math.floor(Math.random() * 140 + 25);
    this.gotService
      .getCharacter(id)
      .then((char) => this.onCharLoaded(char))
      .catch(this.onError);
  };

  onCharLoaded = (char) => {
    this.setState({
      char,
      loading: false,
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  componentDidMount() {
    this.updateChar();
    this.timerId = setInterval(this.updateChar, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { char, loading, error, showRandomChar } = this.state,
      errorMessage = error ? <ErrorMessage /> : null,
      spinner = loading ? <Spinner /> : null,
      content = !(loading || error || showRandomChar) ? <View char={char} /> : null;

    return (
      <Container>

       <Row>
       <Col lg={{ size: 5, offset: 0 }}>
        <div className='random-block rounded'>
          {errorMessage}
          {spinner}
          {content}
        </div>
        <button className={'toggle-btn'} onClick={this.toggleRandomChar}>
          Toggle Random Char
        </button>
        </Col>
        </Row>
      </Container>
    );
  }
}

const View = ({ char }) => {
  const itemStyle = 'list-group-item d-flex justify-content-between',
    { name, gender, born, died, culture } = char;

  return (
    <>
      <h4>Random Character: {name}</h4>
      <ul className='list-group list-group-flush'>
        <li className={itemStyle}>
          <span className='term'>Gender </span>
          <span>{gender}</span>
        </li>
        <li className={itemStyle}>
          <span className='term'>Born </span>
          <span>{born}</span>
        </li>
        <li className={itemStyle}>
          <span className='term'>Died </span>
          <span>{died}</span>
        </li>
        <li className={itemStyle}>
          <span className='term'>Culture </span>
          <span>{culture}</span>
        </li>
      </ul>
    </>
  );
};
