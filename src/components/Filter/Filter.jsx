import { getFilteredName } from 'redux/FilterSlice/FilterSlice';
import { Container, Heading, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Heading>Find contacts by name</Heading>
      <Input
        name="filter"
        type="text"
        onChange={event => dispatch(getFilteredName(event.target.value))}
      />
    </Container>
  );
};
