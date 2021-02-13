import React, { Component } from 'react';
import ItemList from '../../itemList/itemList';
import ItemDetails, { Field } from '../../itemDetails/itemDetails';
import gotService from '../../../services/gotService';
import RowBlock from '../../rowBlock/RowBlock';

export default class CharactersPage extends Component {
  gotService = new gotService();

  state = {
    selectedChar: null,
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
        getData={this.gotService.getAllCharacters}
        renderItem={({ name }) => name}
      />
    );

    const itemDetails = (
      <ItemDetails
        itemId={this.state.selectedChar}
        getData={this.gotService.getCharacter}>
        <Field field='gender' label='Gender' />
        <Field field='born' label='Born' />
        <Field field='died' label='Died' />
        <Field field='culture' label='Culture' />
      </ItemDetails>
    );

    return <RowBlock leftCol={itemList} rightCol={itemDetails} />;
  }
}
