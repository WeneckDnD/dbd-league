import imageAHL from '../../img/AHL_2025_final_5k.png'
import './styleAnnoun.css'

function Announcements() {
    return (
        <section id="announcements">
            <div className="announ-text">
            <h2>Announcements</h2>
                <p>
                    <strong>The teams are set.</strong>
                    <span className="glow"> AHL 2025</span> is about to begin.
                </p>
                <p>
                    After careful selection and preparation –
                    <strong>the Qualification Stage starts on October 4!</strong>
                </p>
                <p>
                    The journey begins with 16 contenders, but only 8 will advance to join the
                    <span className="glow"> Main Stage</span>. Each team will fight through
                    their group in a single evening, with multiple matches played back-to-back.
                </p>
                <p>
                    <strong>Main Stage (starting October 16)</strong>: Ariandel, Ascent,
                    Catalyst, Elysium, Invictus, Petroleum, Praxis, Reassure.
                </p>
                <p>
                    <strong>Qualification Groups</strong>
                    <br />Group A – Oct 04: Chads, Exodus, Radiant, Sorrow
                    <br />Group B – Oct 05: Eneida, Envy (Pain), Orison, Umbrella
                    <br />Group C – Oct 11: Divine Dead, Eclipse, Infinity, Mercy/Unholy*
                    <br />Group D – Oct 12: Obscura, Pandemonium, Vikzz, Infernal/Desperate*
                </p>
                <p>
                    <em>*Teams marked with an asterisk must play an additional elimination match to secure their spot.</em>
                </p>
                <p>
                    <strong>We are looking forward to an unforgettable season.</strong> More
                    information about the new tiebreaker rules, special sets, and regulations
                    will be revealed soon – stay tuned!
                </p>
            </div>

            <div className="announ-image">
                <img src={imageAHL} alt="AHL 2025 Poster"></img>
                <p>Artwork - Arla6</p>
            </div>
        </section>
    )
}

export default Announcements;

