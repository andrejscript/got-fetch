import React, { Component } from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

export default class RandomChar extends Component {

  gotService = new gotService();

  state = {
    char: {},
    loading: true,
    error: false,
  };

  updateChar = () => {
    const id = Math.floor(Math.random() * 140 + 25);
    this.gotService
      .getCharacter(id)
      .then((char) => this.onCharLoaded(char))
      .catch(this.onError);
  }

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
    const { char, loading, error } = this.state,
      errorMessage = error ? <ErrorMessage /> : null,
      spinner = loading ? <Spinner /> : null,
      content = !(loading || error) ? <View char={char} /> : null;

    return (
      <div className='random-block rounded'>
        {errorMessage}
        {spinner}
        {content}
      </div>
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
