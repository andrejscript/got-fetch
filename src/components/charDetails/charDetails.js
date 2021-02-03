import React, { Component } from 'react';
import './charDetails.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

const Field = ({ item, field, label }) => {
  return (
    <li className={'list-group-item d-flex justify-content-between'}>
      <span className='term'>{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export {
  Field
}

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
    console.log(this.props);
    
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

    const { name } = this.state.char;

    return (
      <div className='char-details rounded'>
        <h4>{name}</h4>
        <ul className='list-group list-group-flush'>
          {this.props.children}
        </ul>
      </div>
    );
  }
}
