import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Support from '../Support';
import Faq from './FAQ/Faq';
import About from '../Header/About/About';
import './styleFooter.css';


function Footer() {
    return (
            <footer className="site-footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Support</h3>
                        <ul>
                            <li><Link to="/support">Support Us</Link></li>
                            <li><Link to="/about">Donations</Link></li>
                            <li><Link to="/about">Sponsors</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Help & Info</h3>
                        <ul>
                            <li><Link to="/FAQ">FAQ</Link></li>
                            <li><Link to="/about">Rules</Link></li>
                            <li><Link to="/about">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Community</h3>
                        <ul>
                            <li><a href='https://discord.gg/dbdleague' target="_blank">Discord</a></li> {/*link*/}
                            <li><a href='https://x.com/DBDLeague' target="_blank">Twitter</a></li>
                            <li><a href='https://www.twitch.tv/DBDLeague' target="_blank">Twitch</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>League Info</h3>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/about">Staff Team</Link></li>
                            <li><Link to="/about">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 DBD Competitive League. All rights reserved.</p>
                </div>
            </footer>


    )
}

export default Footer;

