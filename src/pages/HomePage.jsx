import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectCountriesInfo, selectVisibleCountries } from '../Redux/Countries/countrySelector';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { LinearProgress, Pagination } from '@mui/material';

import { loadCountries } from '../Redux/Countries/countryActions';
import { setPage } from '../Redux/Controls/controlsAction';






export const HomePage = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {search, region, page} = useSelector(state => state.controls);
  const countries = useSelector(state => selectVisibleCountries(state, {search, region}));
  const {status, error, qty} = useSelector(selectCountriesInfo);


  const splicedCountries = page === 1 ? countries.slice(0, (page*10)) : countries.slice((page*10), (page*10 + 10));

  // qty изначально 0, потом меняется при загрузке стран
  // поэтому рендер происходит 2 раза, не круто
  useEffect(() => {
    // когда страные есть то не надо запрос
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return (
    <>
      <Controls />

      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <LinearProgress 
                                  style={{marginTop: '60px',
                                          height: '10px',
                                          borderRadius: '10px'
                                          }}/>}

      {status === 'received' && (
        <List>
          {splicedCountries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: c.region,
                },
                {
                  title: 'Capital',
                  description: c.capital,
                },
              ],
            };

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/countries/details/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
          
        </List> 
      )}
      {!search && splicedCountries.length ? 
        <div className='pagination'>
          <Pagination
            count={Math.ceil(countries.length / 10) - 1}
            page={page}
            onChange={(_, num) => {
              dispatch(setPage(num))
              document.documentElement.scrollTop = 0;
            }}
            color="primary"
            size='medium'
          /> 
        </div>
      : null}
    </>
  );
};
