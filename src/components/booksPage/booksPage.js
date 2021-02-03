import React, { Component } from 'react';
import './characterPage.css';
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock/rowBlock';

export default class characterPage extends Component {
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
        getData={this.gotService.getAllCharacters}
        renderItem={({ name, gender }) => `${name} (${gender})`}
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
