import React, { Component } from 'react';
import './charDetails.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

export default class CharDetails extends Component {
  gotService = new gotService();

  state = {
    char: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
  }

  onCharDetailsLoaded = (char) => {
    this.setState({
      char,
      loading: false,
    });
  };

  updateChar() {
    const { charId } = this.props;
    if (!charId) {
      return;
    }

    this.setState({ loading: true });

    this.gotService
      .getCharacter(charId)
      .then(this.onCharDetailsLoaded)
      .catch(() => this.onError());
  }

  onError() {
    this.setState({
      char: null,
      error: true,
    });
  }

  render() {
    const { char, loading, error } = this.state;

    if (!char && error) {
      return <ErrorMessage />;
    } else if (!char) {
      return <span className='select-error'>Please select a character</span>;
    }

    if (loading) {
      return (
        <div className='char-details rounded'>
          <Spinner />
        </div>
      );
    }

    const { name, gender, born, died, culture, id } = this.state.char;
    const listGroupItem = 'list-group-item d-flex justify-content-between';

    return (
      <div className='char-details rounded'>
        <h4>{name}</h4>
        <ul className='list-group list-group-flush'>
          <li className={listGroupItem}>
            <span className='term'>Gender</span>
            <span>{gender}</span>
          </li>
          <li className={listGroupItem}>
            <span className='term'>Born</span>
            <span>{born}</span>
          </li>
          <li className={listGroupItem}>
            <span className='term'>Died</span>
            <span>{died}</span>
          </li>
          <li className={listGroupItem}>
            <span className='term'>Culture</span>
            <span>{culture}</span>
          </li>
          <li className={listGroupItem}>
            <span className='term'>Id</span>
            <span>{id}</span>
          </li>
        </ul>
      </div>
    );
  }
}
