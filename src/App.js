import { Fragment, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './component/navBar/navBar';
import ListIcon from './component/common/listIcon/listIcon';
import Hero from './component/hero/hero';
import AboutMe from './component/aboutMe/aboutMe';
import Experience from './component/experience/experience';
import Projects from './component/projects/projects';
import Contact from './component/contact/contact';
import Footer from './component/footer/footer';
import WelcomeLoader from './component/welcomeLoader/welcomeLoader';
import NotFound from './component/common/notFound';

function App() {

  const [display, setDisplay] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(1);
    },5000)
  }, [])
  return (
    <Fragment>
      {display ? (<Routes>
        <Route path='' element={(<Fragment>
        <NavBar />
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        </Fragment>)} />
        <Route path='/*' element={<NotFound/>} />
      </Routes> ) : (<WelcomeLoader />)}
    </Fragment>
  );
}

export default App;
