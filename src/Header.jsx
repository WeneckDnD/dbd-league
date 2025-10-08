import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import News from './News';
import PlayersTable from './PlayersTable';
import Announcements from './Announcements';
import Clash from './Clash';
import CreateTeam from './CreateATeam';
import LeaderboardComponent from './Leaderboard';
import About from './About';
import dbdl_logo from './img/dbdllogo.png'
import Teams from './Teams';

function Header() {

    return (
        <BrowserRouter>
            <header className='header'>
                {/* Logo Section */}
                <div className="nav-logo">
                    <Link to="/" className="logo">
                        <div className="logo-icon">
                            <img src={dbdl_logo} alt='logo'></img>
                        </div>
                        <div className="logo-text">DBD LEAGUE</div>
                    </Link>
                </div>

                <nav id="floating-menu">
                    <ul>
                        {/* Main Navigation */}
                        <li><Link to="/">ABOUT</Link></li>
                        <li><Link to="/announcements">ANNOUNCEMENTS</Link></li>

                        {/* Live Section - Special styling for live content */}
                        <li><Link to="/live" className="live-link">LIVE</Link></li>

                        {/* Competition Links */}
                        <li><Link to="/BoB">BoTB</Link></li>
                        <li><Link to="/1v1">1v1</Link></li>
                        <li><Link to="/teamCreation">CREATE TEAM</Link></li>
                        <li><Link to="/teams">TEAMS</Link></li>

                        {/* Seasons Dropdown */}
                        <li className="dropdown">
                            <Link to="/seasons">SEASONS</Link>
                            <div className="dropdown-content">
                                <Link to="/seasons/current">Current Season</Link>
                                <Link to="/seasons/season-10">Season 10</Link>
                                <Link to="/seasons/season-9">Season 9</Link>
                                <Link to="/seasons/season-8">Season 8</Link>
                                <Link to="/seasons/archives">Season Archives</Link>
                                <Link to="/seasons/balancing">Balancing Updates</Link>
                            </div>
                        </li>

                        {/* Stats and Rankings */}
                        <li><Link to="/leaderboard">LEADERBOARD</Link></li>
                        <li><Link to="/stats">PLAYER STATS</Link></li>
                    </ul>
                </nav>
            </header>


            <Routes>
                <Route path='/news' element={<News />} />
                <Route path='/BoB' element={<PlayersTable />} />
                <Route path='/announcements' element={<Announcements />} />
                <Route path='/1v1' element={<Clash />} />
                <Route path='/teamCreation' element={<CreateTeam />} />
                <Route path='/leaderboard' element={<LeaderboardComponent />} />
                <Route path='/' element={<About />} />
                <Route path='/teams' element={<Teams />} />
                
            </Routes>
        </BrowserRouter>
    );
}

export default Header