import React, { Component } from 'react';

export class FormUser extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.contact !== this.props.contact;
  }
  handleChange = (event) => {
    this.props.onContactChange({
      ...this.props.contact,
      [event.target.name]: event.target.value,
    });
  };
  render() {
    console.log('render FormUser');
    const { contact } = this.props;
    return (
      <form className="FormUser">
        <div>
          Prénom <input value={contact.prenom} name="prenom" onChange={this.handleChange} />
        </div>
        <div>
          Nom <input value={contact.nom} name="nom" onChange={this.handleChange} />
        </div>
        <div>
          <button>Ajouter</button>
        </div>
      </form>
    );
  }
}
