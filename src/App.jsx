import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Main } from './components/Main';

import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
        <Main>
          <Routes>
            <Route exact path="/countries" element={
              <HomePage />
            } />
            <Route path="/countries/details/:name" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
      <Footer/>
    </>
  );
};
