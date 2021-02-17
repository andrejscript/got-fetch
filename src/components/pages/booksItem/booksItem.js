import React, { Component } from 'react';
import ItemDetails, { Field } from '../../itemDetails/itemDetails';
import gotService from '../../../services/gotService';

export default class BooksItem extends Component {
  gotService = new gotService();

  state = {
    selectedBook: 3
  };

  render() {
    return (
      <ItemDetails
        itemId={this.state.selectedBook}
        getData={this.gotService.getBook}>
        <Field field='numberOfPages' label='Number of pages' />
        <Field field='publisher' label='Publisher' />
        <Field field='released' label='Released' />
      </ItemDetails>
    )
  }
}