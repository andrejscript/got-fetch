import React, { Component } from 'react';
import ItemList from '../../itemList/itemList';
import ErrorMessage from '../../errorMessage/errorMessage';
import {withRouter} from 'react-router-dom';
import gotService from '../../../services/gotService';

class BooksPage extends Component {
  gotService = new gotService();

  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    return (
      <ItemList
        onItemSelected={(itemId) => {

        }}
        getData={this.gotService.getAllBooks}
        renderItem={({ name }) => `${name}`}
      />
    );
  }
}

export default withRouter(BooksPage);