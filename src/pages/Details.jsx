import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { IoArrowBack } from 'react-icons/io5';
import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { LinearProgress  } from '@mui/material';

import { clearDetails, loadCountryByName } from '../Redux/Details/detailsActions';
import Weather from '../components/Weather';
import { borderRadius } from '@mui/system';



export const Details = () => {

  const { name } = useParams();
  const dispatch = useDispatch();
  const {currentCountry, error, status} = useSelector(state => state.details);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadCountryByName(name));

    // когда уходим со страницы деталей происходит размонтирование
    // и страницы друг на друга не накладываются
    return () => {
      dispatch(clearDetails)
    }
  }, [name, dispatch])

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'loading' && <LinearProgress 
                                  style={{marginTop: '60px',
                                          height: '10px',
                                          borderRadius: '10px'
                                          }}/>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
      {currentCountry && <Weather capitalName={currentCountry.capital}/>}
    </div>
  );
};
