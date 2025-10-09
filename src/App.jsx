import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./Header/Header.jsx";

import Footer from "./Footer/Footer.jsx";

import LiquidEther from "./LiquidEther.jsx";

import PlayersTable from './Header/BOTB/PlayersTable';
import Announcements from './Header/Announcements/Announcements';
import Clash from './Header/1v1/Clash';
import CreateTeam from './Header/CreateATeam/CreateATeam';
import LeaderboardComponent from './Header/Leaderboard/Leaderboard';
import About from './Header/About/About';
import Teams from './Header/Teams/Teams';
import Support from './Support';
import Faq from './Footer/FAQ/Faq';

function App() {


  return (
    <>
      <BrowserRouter>
        <LiquidEther style={{ width: '1920', height: '1080', position: 'fixed' }}
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.6}
          autoIntensity={3.5}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        ></LiquidEther>
        <Header></Header>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/announcements' element={<Announcements />} />
          <Route path='/BoB' element={<PlayersTable />} />
          <Route path='/1v1' element={<Clash />} />
          <Route path='/teamCreation' element={<CreateTeam />} />
          <Route path='/leaderboard' element={<LeaderboardComponent />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/FAQ' element={<Faq />} />
          <Route path='/support' element={<Support />} />
          <Route path='/about' element={<About />} />
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
