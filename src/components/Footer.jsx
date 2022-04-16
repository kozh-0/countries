import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Container } from './Container';

const FooterEl = styled.footer`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Title = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Footer = () => {
    const theme = useSelector(state => state.theme)

    return (
        <FooterEl>
          <Container>
            <Wrapper>
              <Title>
                kozh inc. {new Date().getFullYear()}
              </Title>
              <Title>
                <a
                  className='footer_github'
                  href="https://github.com/kozh-0"
                >
                    {theme === 'dark' ? <span style={{color: 'white'}}>GitHub</span> : <span style={{color: 'black'}}>GitHub</span>}
                    <img 
                      style={{marginLeft: '5px'}}
                      src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
                      alt='git'
                    />
                </a>
              </Title>
            </Wrapper>
          </Container>
        </FooterEl>
      );
}
