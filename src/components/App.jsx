import { Component } from 'react';
import { nanoid } from 'nanoid'
import ContactForm from './contactForm';
import Filter from './filter';
import ContactList from './contactList';
import styled from 'styled-components';

const TitleMain = styled.h1`
  font-size: 40px
`;

const TitleList = styled.h2`
  font-size: 40px
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
    contacts: [],
    }
  }

  handleSubmit = (values, actions) => {
    const { contacts } = this.state;
    const newContacts = [...contacts];
    this.setState({
      contacts: [
        ...newContacts,
        {
          id: nanoid(),
          name: values.name,
          number: values.number,
        },
      ],
    });
    actions.resetForm();
  };

  onDelete = (id) => {
    const { contacts } = this.state;
    const newContacts = [...contacts];
    this.setState({
      contacts: newContacts.filter(contact => contact.id !== id)
    })
  }

  render() {
    const { contacts } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <TitleMain>Phonebook</TitleMain>
          <ContactForm
            handleSubmit={(values, actions) => 
              this.handleSubmit(values, actions)}
          />

          <TitleList>Contacts</TitleList>
          <Filter />
          <ContactList
            contacts={contacts}
            onDelete={(id) => 
              this.onDelete(id)}
            />
        </div>
      </div>
    );
  }
}

export default App;
