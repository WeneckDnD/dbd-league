import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Support from './Support';
import Faq from './Faq';
import About from './Header/About/About';

function Footer() {
    return (
        <BrowserRouter>
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
                            <li><a href="#discord">Discord</a></li>
                            <li><a href="#twitter">Twitter</a></li>
                            <li><a href="#twitch">Twitch</a></li>
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

            <Routes>
                <Route path='/FAQ' element={<Faq />} />
                <Route path='/support' element={<Support />} /> 
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Footer;

