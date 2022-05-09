import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadNeighboursByBorder } from '../Redux/Details/detailsActions';


const Wrapper = styled.section`
  margin-top: 1.5rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  // height: 100%;
  object-fit: contain;
  box-shadow: 0px 0px 10px 4px rgba(34, 60, 80, 0.2);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Meta = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: .5rem 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
  border-radius: 10px;

  
  :hover {
    box-shadow: rgba(255, 0, 0, 1) 0 0 10px;
  }
`;


export const Info = (props) => {

  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
    push,
  } = props;

  const dispatch = useDispatch();
  const neighbours = useSelector(state => state.details.neighbours);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighboursByBorder(borders))
    }
  }, [borders, dispatch]);

  return (
    <Wrapper>
      <InfoImage src={flag} alt={name} />

      <div>
        {
          useSelector(state => state.theme) === 'light' ? 
            <h1 style={{color: 'black', background: '#ff9800', marginBottom: '15px'}}>{name}</h1>
              : 
            <h1 style={{color: 'white', marginBottom: '15px'}}>{name}</h1>
        }
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name:</b> {nativeName}
            </ListItem>
            <ListItem>
              <b>Population</b> {population}
            </ListItem>
            <ListItem>
              <b>Region:</b> {region}
            </ListItem>
            <ListItem>
              <b>Sub Region:</b> {subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b> {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain</b>{' '}
              {topLevelDomain.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Currency</b>{' '}
              {currencies.map((c) => (
                <span key={c.code}>{c.name} </span>
              ))}
            </ListItem>
            <ListItem>
              <b>Top Level Domain</b>{' '}
              {languages.map((l) => (
                <span key={l.name}>{l.name}</span>
              ))}
            </ListItem>
          </List>
        </ListGroup>
        {useSelector(state => state.theme) === 'light' ? 
          <h1 style={{color: 'black', background: '#ff9800', marginTop: '1rem'}}>Border Countries</h1> 
            : 
          <h1 style={{color: 'white', marginTop: '1rem'}}>Border Countries</h1>
        }
        <Meta>
          {!borders.length ? (
            <h3>There is no border countries ¯\_(ツ)_/¯</h3>
          ) : (
            <TagGroup>
              {neighbours.map((countryName) => (
                <Tag key={countryName} onClick={() => push(`/countries/details/${countryName}`)}>
                  {countryName}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};
