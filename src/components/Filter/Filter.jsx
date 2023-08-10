import { getFilteredName } from 'redux/FilterSlice/FilterSlice';
import { Container, Heading, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { FilterSelector } from 'redux/FilterSlice/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(FilterSelector);

  return (
    <Container>
      <Heading>Find contacts by name</Heading>
      <Input
        name="filter"
        type="text"
        value={filter}
        onChange={event => dispatch(getFilteredName(event.target.value))}
      />
    </Container>
  );
};
