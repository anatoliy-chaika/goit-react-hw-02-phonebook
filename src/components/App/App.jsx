import { Component } from "react";
import { Contactlist } from "../ContactList/ContactList"
import {ContactForm} from "../ContactForm/ContactForm"

export class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  name: '',

  
  }
  addContact = newContact => {
    this.setState(prevstate => {
      return {
       contacts:[...prevstate.contacts, newContact]
     }
   })
  }
  
   deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contactId)
      }
    });
  }
  
  
  render()
    {return(<div>
  <h1>Phonebook</h1>
    <ContactForm onSave={ this.addContact } />

  <h2>Contacts</h2>
    <Contactlist data={ this.state.contacts } onDelete={this.deleteContact} />
</div>
)}
  
}
