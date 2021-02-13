import React, { Component } from 'react';
import ItemList from '../../itemList/itemList';
import ItemDetails, { Field } from '../../itemDetails/itemDetails';
import gotService from '../../../services/gotService';
import RowBlock from '../../rowBlock/RowBlock';

export default class HousesPage extends Component {
  gotService = new gotService();

  state = {
    selectedHouse: null,
    error: false,
  };

  onItemSelected = (id) => {
    this.setState({
      selectedHouse: id,
    });
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllHouses}
        renderItem={({ name, region }) => `${name} (${region})`}
      />
    );

    const houseDetails = (
      <ItemDetails
        itemId={this.state.selectedHouse}
        getData={this.gotService.getHouse}>
        <Field field='region' label='Region' />
        <Field field='words' label='Words' />
        <Field field='titles' label='Titles' />
        <Field field='overlord' label='Overlord' />
        <Field field='ancestralWeapons' label='Ancestral weapons' />
      </ItemDetails>
    );

    return <RowBlock leftCol={itemList} rightCol={houseDetails} />;
  }
}