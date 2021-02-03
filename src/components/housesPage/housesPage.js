import React, { Component } from 'react';
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock/rowBlock';

export default class HousesPage extends Component {
  gotService = new gotService();

  state = {
    
    selectedChar: null,
    error: false,
  };

  onCharSelected = (id) => {
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
        onItemSelected={this.onCharSelected}
        getData={this.gotService.getAllHouses}
        renderItem={({ name, region }) => `${name} (${region})`}
      />
    );

    const charDetails = <CharDetails charId={this.state.selectedChar} />;

    return (
      <RowBlock 
        leftSide={itemList}
        rightSide={charDetails}
      />
    );
  }
}
