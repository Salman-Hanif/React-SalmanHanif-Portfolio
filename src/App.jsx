import Services from './components/Services';
import Preloader from './Components/Preloader';
import Hero from './Components/Hero';
import './App.css';
import Footer from './components/Footer';
import Container from './Components/Container';
import OpenWork from './Router/OpenWork';
import { OpenWorkStore } from './ContextStore/OpenWorkStore';
import Work from './components/Work';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from 'react';
import Header from './components/Header';
import SubmitForm from './components/SubmitForm';

function App() {
  const [webName, setWebName] = useState('');

  const getwebname = (name) => {
    setWebName(name);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Container>
          <Header />
          <Preloader />
          <Hero />
          <Work />
          <Services />
          <SubmitForm/>
          <Footer />
        </Container>
      )
    },
    {
      path: '/work',
      element: <OpenWork />
    }
  ]);

  return (
    <>
      <OpenWorkStore.Provider value={{ getwebname, webName }}>
        <RouterProvider router={router} />
      </OpenWorkStore.Provider>
    </>
  );
}

export default App;
