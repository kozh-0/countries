import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { IoSearch } from 'react-icons/io5';
import { setSearch } from '../Redux/Controls/controlsAction';

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  width: 100%;
  padding-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`;


export const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector(state => state.controls.search);
  
  return (
    <InputContainer>
      <IoSearch />
      <Input 
        onChange={(e) => dispatch(setSearch(e.target.value))} 
        value={search}/>
    </InputContainer>
  );
};

// onChange={debounce((e) => dispatch(setSearch(e.target.value)), 500)} 





/*{ <div style={{position: 'relative'}}>
<Button
>Search</Button>

</div> }*/



/* const Button = styled.button`
  position: absolute;
  height: 50px;
  width: 70px;
  bottom: -25px;
  left: -20px;
  // border: 1px solid #kkk;
  background-color: var(--colors-ui-button);
  color: var(--colors-text);
  border-radius: 10px;
` */