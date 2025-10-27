import './styleAbout.css'

function About() {

    return (
        <section id="about">
            <div className="about-text">
                <h2>Dead by Daylight League</h2>
                <p><strong>Founded:</strong> June 23rd, 2018</p>
                <p>
                    <strong>Focus:</strong> An independent eSports organisation based
                    around <em>Dead by Daylight</em>.
                </p>
                <p>
                    We host various competitive events throughout the year. Our main and
                    flagship event is the <strong>"League Season"</strong>.
                </p>
                <p>
                    Although all platforms are welcome, some events are
                    <strong> invite-only</strong>. You can earn your place by proving
                    yourself in our open tournaments.
                </p>
                <p>
                    Prefer to spectate? Join our engaging broadcasts and experience the
                    thrill with our top-tier production.
                </p>
                <p>
                    <strong>Powered by passion:</strong> DBDLeague is volunteer-based.
                    Events are funded via community support, donations, or sponsors.
                </p>
            </div>
            <div className="team-table-container about-text">
                <h2>Our Team</h2>

                <table className="team-table">
                    <tbody>
                        <tr><td>Dir3Wolf</td><td>Savanna</td><td>Kasi</td></tr>
                        <tr><td>De_rolock</td><td>Banshee</td><td>iko</td></tr>
                        <tr><td>Laser</td><td>Ratz</td><td>Veloria</td></tr>
                        <tr><td>V1</td><td>Andyfreel</td><td>Frozen</td></tr>
                        <tr><td>Scorched</td><td>TheSassyPancake</td><td>Yae</td></tr>
                        <tr><td>Luphii</td><td>Parallax</td><td>Pimp</td></tr>
                        <tr><td>Altaresh</td><td>Banshee</td><td>DreamerSteamer</td></tr>
                        <tr><td>Xeno</td><td>Arla6</td><td>Pikz</td></tr>
                        <tr><td>Torsolman</td><td></td><td></td></tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default About;