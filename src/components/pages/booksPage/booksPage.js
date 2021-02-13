import React, { Component } from 'react';
import ItemList from '../../itemList/itemList';
import ItemDetails, { Field } from '../../itemDetails/itemDetails';
import gotService from '../../../services/gotService';
import RowBlock from '../../rowBlock/RowBlock';

export default class BooksPage extends Component {
  gotService = new gotService();

  state = {
    selectedBook: null,
    error: false,
  };

  onItemSelected = (id) => {
    this.setState({
      selectedChar: id,
    });
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllBooks}
        renderItem={({ name }) => `${name}`}
      />
    );

    const BookDetails = (
      <ItemDetails
        itemId={this.state.selectedBook}
        getData={this.gotService.getBook}>
        <Field field='numberOfPages' label='Number of pages' />
        <Field field='publisher' label='Publisher' />
        <Field field='released' label='Released' />
      </ItemDetails>
    );

    return <RowBlock leftCol={itemList} rightCol={BookDetails} />;
  }
}
