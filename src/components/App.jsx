import { Component } from 'react';
import { nanoid } from 'nanoid'
import ContactForm from './contactForm';
import Filter from './filter';
import ContactList from './contactList';

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

  render() {
    
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <h1>Phonebook</h1>
          <ContactForm
            handleSubmit={(values, actions) => 
              this.handleSubmit(values, actions)}
          />

          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    );
  }
}

export default App;
