import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PlayersTable from './BOTB/PlayersTable';
import Announcements from './Announcements/Announcements';
import Clash from './1v1/Clash';
import CreateTeam from './CreateATeam/CreateATeam';
import LeaderboardComponent from './Leaderboard/Leaderboard';
import About from './About/About';
import dbdl_logo from '../img/dbdllogo.png'
import Teams from './Teams/Teams';
import './styleHeader.css';
import CustomizedSwitch from './ThemeSwitch/themeSwitchButton';

function Header() {

    return (
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
                    {/* <li><Link to="/live" className="live-link">LIVE</Link></li> */}

                    {/* Competition Links */}
                    {/* <li><Link to="/BoB">BoTB</Link></li> */}
                    <li><Link to="/1v1">1v1</Link></li>
                    <li><Link to="/teamCreation">CREATE TEAM</Link></li>
                    <li><Link to="/teams">TEAMS</Link></li>

                    {/* Seasons Dropdown */}
                    <li className="dropdown">
                        <Link to="/seasons">SEASONS</Link>
                        <div className="dropdown-content">
                            <div className='dropdown2'>
                                <Link to="/seasons/current">Current Season (AHL)<span className='spanColor'>NEW!</span></Link>
                                <div className='dropdown-content2'>
                                    <Link to="/seasons/season-10">Information</Link>
                                    <Link to="/seasons/season-9">Qualification info</Link>
                                    <Link to="/seasons/season-8">Ruleset</Link>
                                    <Link to="/seasons/archives">survivor rule update</Link>
                                    <Link to="/seasons/balancing">gold standarts killers</Link>

                                    <Link to="/seasons/season-10">Special H. Sets</Link>
                                    <Link to="/seasons/season-9">Picks and Bans</Link>
                                    <Link to="/seasons/season-8">Set 5 and 7</Link>
                                    <Link to="/seasons/archives">Payout Information</Link>
                                    <Link to="/seasons/balancing">Tiebreaker</Link>
                                    
                                </div>
                            </div>
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
            <div>
                <CustomizedSwitch />
            </div>
        </header>
    );
}

export default Header