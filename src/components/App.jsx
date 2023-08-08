import { Heading } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div>
      <Heading>Phonebook</Heading>
      <ContactForm />
      <Heading>Contacts</Heading>
       <Filter /> 
      <ContactList />
    </div>
  );
};
