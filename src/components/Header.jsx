import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

import { Container } from './Container';
import { setTheme } from '../Redux/Theme/themeActions';
import { clearControls } from '../Redux/Controls/controlsAction';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Title = styled(Link).attrs({
  to: '/countries',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModeSwitcher = styled.div`
  display: flex;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

export const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  const toggleTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));


  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={() => dispatch(clearControls)}>
            <img 
              className='header_img'
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/World_Map_Icon.svg/800px-World_Map_Icon.svg.png" 
              alt="world" />Where is the world?
          </Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? (
              <IoMoonOutline size="18px" />
            ) : (
              <IoMoon size="18px" />
            )}{' '}
            <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
