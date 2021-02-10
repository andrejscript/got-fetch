import React, { Component } from 'react';
import ItemList from '../itemList/itemList';
import CharDetails, {Field} from '../charDetails/charDetails';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock/rowBlock';

export default class CharacterPage extends Component {
  gotService = new gotService();

  state = {
    selectedChar: 130,
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
        renderItem={({ name }) => `${name}`}
      />
    );

    const charDetails = (
      <CharDetails
        charId={this.state.selectedChar}>
        <Field field='gender' label='Gender'/>
        <Field field='born' label='Born'/>
      </CharDetails>
    )

    return  <RowBlock leftCol={itemList} rightCol={charDetails} />;
  }
}
