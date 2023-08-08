import { removeContact } from 'redux/ContactSlice/ContactSlice';
import { Item, List, Text, Button } from './Contact.styled';

const { useSelector, useDispatch } = require('react-redux');

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contact.contact);
  const filter = useSelector(state => state.filter.filter);

  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContact.length === 0
        ? 'There is no contact added'
        : filteredContact?.map(contact => (
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
