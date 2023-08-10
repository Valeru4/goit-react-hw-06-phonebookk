import { removeContact } from 'redux/ContactSlice/contactSlice';
import { Item, List, Text, Button, Paragraph } from './Contact.styled';
import { ContactSelector } from 'redux/ContactSlice/selectors';
import { FilterSelector } from 'redux/FilterSlice/selectors';

const { useSelector, useDispatch } = require('react-redux');

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(ContactSelector);
  const filter = useSelector(FilterSelector);

  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredContact.length === 0)
    return <Paragraph>There is no contact added</Paragraph>;

  return (
    <List>
      {filteredContact?.map(contact => (
        <Item key={contact.id}>
          <Text>{contact.name}</Text>
          <Button onClick={() => dispatch(removeContact(contact.name))}>
            &times;
          </Button>
        </Item>
      ))}
    </List>
  );
};
