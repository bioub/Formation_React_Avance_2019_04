import React, { Component, Fragment } from 'react';
import './App.css';
import { Dropdown, DropdownHideable } from './Dropdown';
import { FormUser } from './FormUser';

class App extends Component {
  state = {
    items: ['Jean', 'Pierre'],
    selected: 'Pierre',
    contact: {
      prenom: 'Patrick',
      nom: 'Dupont',
    },
    selectedColor: 'Rouge',
  };
  handleSelectColor = (selectedColor) => {
    this.setState({
      selectedColor,
    });
  };
  handleSelect = (item) => {
    this.setState({
      selected: item,
    });
  };
  handleContactChange = (contact) => {
    this.setState({
      contact,
    });
  };
  renderColors(onSelect, itemClassName) {
    return (
      <Fragment>
        <div className={itemClassName} onClick={() => onSelect('Rouge')}>Rouge</div>
        <div onClick={() => onSelect('Vert')}>Vert</div>
        <div onClick={() => onSelect('Bleu')}>Bleu</div>
      </Fragment>
    );
  }
  render() {
    return (
      <div className="App">
        <FormUser contact={this.state.contact} onContactChange={this.handleContactChange} />
        <Dropdown items={this.state.items} selected={this.state.selected} onSelect={this.handleSelect} />
        <Dropdown selected={this.state.selectedColor} onSelect={this.handleSelectColor}>
          {this.renderColors}
        </Dropdown>
        <Dropdown selected={this.state.selectedColor} onSelect={this.handleSelectColor}>
          {() => <FormUser contact={this.state.contact} />}
        </Dropdown>
        <DropdownHideable items={this.state.items} selected={this.state.selected} onSelect={this.handleSelect} on />
      </div>
    );
  }
}

export default App;
