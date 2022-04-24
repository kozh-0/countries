import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectCountriesInfo, selectVisibleCountries } from '../Redux/Countries/countrySelector';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { LinearProgress, Pagination } from '@mui/material';

import { loadCountries } from '../Redux/Countries/countryActions';






export const HomePage = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {search, region} = useSelector(state => state.controls);
  const countries = useSelector(state => selectVisibleCountries(state, {search, region}));
  const {status, error, qty} = useSelector(selectCountriesInfo);

  /* const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
// 250
  // const indexOfLastPost = useSelector(state => state.countries.list.length);
  const indexOfLastPost = 250;
  const indexOffFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = countries.slice(indexOffFirstPost, indexOfLastPost);
 */

  // const tose = countries.length;
  // console.log(tose);

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
          {countries.map((c) => {
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
      {/* <div className='pagination'>
        <Pagination 
              count={tose}  />
        
      </div> */}
    </>
  );
};
