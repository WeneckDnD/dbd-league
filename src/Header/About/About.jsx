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
                    <strong>invite-only</strong>. You can earn your place by proving
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
                    <thead>
                        <tr>
                            <th>Section</th>
                            <th>Member</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* League Commissioners */}
                        <tr><td rowSpan="4">League Commissioners</td><td>Dir3Wolf</td><td>Event Manager</td></tr>
                        <tr><td>Savanna</td><td>Event and Community Manager</td></tr>
                        <tr><td>Kasi</td><td>Head Staff</td></tr>
                        <tr><td>De_rolock</td><td>Finance Admin</td></tr>

                        {/* Staff */}
                        <tr><td rowSpan="6">Staff</td><td>Banshee</td><td>-</td></tr>
                        <tr><td>iko</td><td>-</td></tr>
                        <tr><td>Laser</td><td>-</td></tr>
                        <tr><td>Ratz</td><td>-</td></tr>
                        <tr><td>Veloria</td><td>-</td></tr>
                        <tr><td>V1</td><td>-</td></tr>

                        {/* Match Officials */}
                        <tr><td rowSpan="5">Match Officials</td><td>Andyfreel</td><td>-</td></tr>
                        <tr><td>Frozen</td><td>-</td></tr>
                        <tr><td>Scorched</td><td>-</td></tr>
                        <tr><td>TheSassyPancake</td><td>-</td></tr>
                        <tr><td>Yae</td><td>-</td></tr>

                        {/* Ladder Moderators */}
                        <tr><td rowSpan="3">Ladder Moderators</td><td>Luphii</td><td>-</td></tr>
                        <tr><td>Parallax</td><td>Add. Twitch Moderator</td></tr>
                        <tr><td>Pimp</td><td>Add. Twitch Moderator</td></tr>

                        {/* Twitch Moderators */}
                        <tr><td rowSpan="4">Twitch Moderators</td><td>Altaresh</td><td>-</td></tr>
                        <tr><td>Banshee</td><td>-</td></tr>
                        <tr><td>DreamerSteamer</td><td>-</td></tr>
                        <tr><td>Xeno</td><td>-</td></tr>

                        {/* Artists */}
                        <tr><td rowSpan="3">Artists</td><td>Arla6</td><td>-</td></tr>
                        <tr><td>Pikz</td><td>-</td></tr>
                        <tr><td>Torsolman</td><td>-</td></tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default About;