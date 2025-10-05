function Clash() {
    return (
        <section id="clash">
            <div className="clash-text">
            <h2>Welcome to the first ever DBD Ranked Ladder!</h2>
                <p>
                    In this channel you are going to find:
                </p>
                <ul>
                    <li>How to set up a 1v1 match</li>
                    <li>1v1 scoring and basic rules</li>
                    <li>Picks and bans system</li>
                    <li>Balancing, rule enforcement, penalties</li>
                    <li>Main rules and guidelines</li>
                </ul>

                <h3>How to Set Up a 1v1 Match</h3>
                <p><strong>1.1 Starting steps:</strong></p>
                <ul>
                    <li>Set your region role in ⁠📜-ladder-region-role.</li>
                    <li>Killers are decided by the <em>picks and bans system</em>.</li>
                    <li>Only killers from the killer pool can be played (unless both players agree otherwise).</li>
                    <li>You must ban killers you do not own. If your opponent picks one, you forfeit that round.</li>
                    <li>Matches are played under the <strong>current balancing ruleset</strong> (⁠🍂seasonal-1v1-balance).</li>
                    <li>Both players should <em>record their matches</em> to resolve disputes.</li>
                    <li>Default format: <strong>Best of 3 (First to 2 wins)</strong>.</li>
                    <li>Use commands: <code>/challenge</code>, <code>/challenge cancel</code>, <code>!iwon</code>, <code>!ilost</code>.</li>
                </ul>

                <p><strong>1.2 Additional steps:</strong></p>
                <ul>
                    <li>Allowed routing programs: ExitLag, NoPing. Any other must be approved by Staff.</li>
                    <li>VPNing or manual region manipulation is prohibited.</li>
                </ul>

                <h3>1v1 Scoring and Basic Rules</h3>
                <p><strong>2.1 Scoring:</strong></p>
                <ul>
                    <li>Score = total chase time.</li>
                    <li>If the result differs by less than 1 second, the set is replayed.</li>
                </ul>

                <p><strong>2.2 Basic Rules:</strong></p>
                <ul>
                    <li>Players alternate between killer and survivor.</li>
                    <li>Timer starts on Survivor Tbag.</li>
                    <li>No map resources can be used before the chase starts.</li>
                    <li>No closing the hatch – automatic forfeit.</li>
                    <li>Survivors must start at shack doors; killers nod to indicate readiness.</li>
                    <li>All killers must swing on start (Nurse blinks with no distance, Blight rushes into door frame and fatigues, Wraith starts uncloaked).</li>
                </ul>

                <p><em>Example:</em> Player 1 gets 1:30 as survivor. Player 2 gets 1:45 as survivor. Player 2 wins the round.</p>

                <h3>Picks and Bans System</h3>
                <ul>
                    <li>Challenger = Team 1 by default.</li>
                    <li>You may agree on killers/maps. If not, use the <em>pick/ban process</em> with SlugBot.</li>
                    <li>Team 1 starts banning.</li>
                </ul>

                <h3>Balancing, Rule Enforcement, Penalties</h3>
                <p><strong>4.1 Balancing:</strong></p>
                <ul>
                    <li>You must follow the latest seasonal balance.</li>
                    <li>Forcing outdated rules = forfeit (unless both agree to play them).</li>
                </ul>

                <p><strong>4.2 Penalties:</strong></p>
                <ul>
                    <li>Each balance offence: -10 seconds. 3 offences = forfeit.</li>
                    <li>Wrong perk/item: replay allowed for non-offending player.</li>
                    <li>Wrong map/killer/offering: quit and restart before chase begins.</li>
                    <li>Survivors cannot walk/crouch/stand 15s outside killer LOS. Must run 5s after.</li>
                    <li>If out of TR vs stealth killers, survivors must run to create a loud noise within 12s.</li>
                </ul>

                <h3>Main Rules and Guidelines</h3>
                <p><strong>5.1 Stalling, Rule Changes, Cheating:</strong></p>
                <ul>
                    <li>Stalling/camping on the ladder is prohibited.</li>
                    <li>You may agree to deviate from rules, but it must be <strong>written and confirmed</strong>.</li>
                    <li>Cheating → investigation → blacklist/exclusion.</li>
                </ul>

                <p><strong>5.2 Main Ladder Rules:</strong></p>
                <ul>
                    <li>No spamming or drama in other 1v1 chats.</li>
                    <li>No intervening in threads between players & moderators.</li>
                    <li>Keep accurate records of matches (picks, times).</li>
                    <li>Matches may be cancelled only before killer discussion starts.</li>
                    <li>Do not AFK after accepting/opening a challenge.</li>
                    <li><strong>Sportsmanship is mandatory.</strong> Harassment, insults, excessive taunting = warnings & blacklist.</li>
                </ul>
            </div>
        </section>

    )
}

export default Clash;