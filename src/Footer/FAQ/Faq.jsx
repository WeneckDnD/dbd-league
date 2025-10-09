import './styleFaq.css';

function Faq() {
    return(
    <section id="faq">
        <div className="faq-text">
        <h2>Frequently Asked Questions</h2>

            <h3>FAQ #1 - HOW TO 1V1</h3>
            <p>
                In order to start your first ladder match, you must first verify your account.
                Do this by clicking the <strong>verify button</strong> in ⁠📜-server-rules.
            </p>

            <h3>FAQ #2 - HOW DO I START A CHALLENGE?</h3>
            <p>Before asking moderators for help, make sure you first follow these steps:</p>
            <ul>
                <li>Verify your account.</li>
                <li>Read carefully through ⁠❗-how-does-1v1-work.</li>
                <li>Make sure you have the <strong>"Community Member"</strong> role (this allows you to see most channels).</li>
                <li>If you didn’t find a solution, go to ⁠📝-create-a-ticket-for-help.</li>
            </ul>

            <h3>FAQ #3 - HOW DO I SET LADDER RANK RANGE?</h3>
            <p>
                Explanation: If you're currently ranked <strong>#200</strong> and you select rank
                range <strong>"100"</strong>, only players ranked between <strong>#100–300</strong>
                can accept your challenge.
            </p>
            <p>
                Example: If you are rank <strong>#150</strong> and set range <strong>"50"</strong>,
                your range will be <strong>#100–200</strong>.
            </p>

            <h3>FAQ #4 - KILLER STATISTICS</h3>
            <p>
                All 4v1 killer statistics can be found here: ⁠🔭-dbdl-statistics.
            </p>

            <h3>FAQ #5 - 1v1 TIMERS</h3>
            <p>DBDLeague recommends these timers for your 1v1s:</p>
            <ul>
                {/* <li><a href="https://truueh.itch.io/dbd-1v1-timer" target="_blank">Truueh 1v1 Timer</a></li>
                <li><a href="https://livesplit.org/" target="_blank">LiveSplit</a></li> */}
            </ul>
            <p>
                Big thanks to <strong>@Truueh</strong> for creating and sharing this timer with us.
            </p>
            <p>
                <em>Note: You may see security alerts since the timer listens for keystrokes in the
                    background. Some antivirus programs might flag it as malware because it doesn’t
                    have a certificate (they’re expensive). Don’t worry—the project is open source and
                    the full code is available on GitHub.</em>
            </p>

            <h3>FAQ #6 - ACCOUNT WAS BANNED. WHAT DO I DO?</h3>
            <p>
                If your account (or your friend's account) got banned on DBDLeague, fill out the
                form here: ⁠❗-unban-request. Reviews may take up to a few weeks.
            </p>
            <p>
                If your account was banned on <strong>Twitch</strong>, apply for an unban directly
                on Twitch. It will be reviewed by moderators.
            </p>

            <h3>FAQ #7 - HOW DOES 4v1 WORK?</h3>
            <p>
                In competitive 4v1 Dead by Daylight tournaments, each matchup is played in a
                mirrored format for fairness. First, the killer from Team A faces Team B’s
                survivors. Then, Team B’s killer faces Team A’s survivors.
            </p>
            <p>
                Both trials are held on the <strong>same map with the same killer</strong> to keep
                conditions equal. Teams are compared by completed generators, hook stages, and
                survivors hooked. The team with the stronger result wins.
            </p>
            <p>
                In the event of a tie, the set is replayed or resolved using tie-breaker rules.
            </p>

            <h3>FAQ #8 - WHY ARE COMP PLAYERS CAMPING AND TUNNELING?</h3>
            <p>
                In competitive DBD, <strong>camping and tunneling</strong> are valid strategies
                because killers must play efficiently to keep up with top survivors.
            </p>
            <p>
                While disliked in casual play, in comp it’s often necessary to secure an early
                elimination against highly skilled teams. Survivors counter this with efficient
                gen rushing, body blocking, and coordinated perks.
            </p>
            <p>
                The dynamic between killers pushing for eliminations and survivors countering
                creates unique back-and-forth gameplay. Within comp, these tactics are generally
                <em>accepted as essential strategies</em>.
            </p>

            <h3>FAQ #9 - HOW CAN WE PARTICIPATE IN DBDLEAGUE?</h3>
            <p>
                There are several ways to join DBDLeague tournaments:
            </p>
            <ul>
                <li>Join our <strong>Discord server</strong> and look for a team in recruitment channels.</li>
                <li>Respond to team applications posted by others.</li>
                <li>Climb the <strong>1v1 leaderboard</strong> to showcase your skills.</li>
                <li>Join community or scrim nights to practice and get noticed.</li>
            </ul>
            <p>
                For main events, being part of an <strong>established team</strong> is usually
                required. Scrims and smaller tournaments are great entry points to build your
                reputation.
            </p>
            <p>
                We value not only performance, but also <em>dedication, fairness, and
                    respectful behavior</em>.
            </p>
            <p>
                Still have questions? ⁠📝-create-a-ticket-for-help.
            </p>
        </div>
    </section>
    )
}

export default Faq;