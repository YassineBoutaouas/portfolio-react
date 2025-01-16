import Banner from '../components/Banner';
import BasePage from './BasePage';

export default function Gameplay(){
    return(
        <BasePage title="Projects" tab="Gameplay & Tools.">
            <h1>Gameplay & Tools</h1>
			<Banner src="images/Gameplay_Banner.png" href="https://github.com/YassineBoutaouas/BeatDetection"/>
            <h3>Beat detection and Combat</h3>
			<p>
				(G)raveyard is a rythm based combat game developed for PC. Gameplay elements, the combat specifically, are beat dependent.
				It was developed in a group of four with me as the primary programmer. Among other things my contributions include the enemy-AI, beat detection, player controls, combat, UI and event systems.
			<br/><br/>
				Depending on the on-beat-ness of the attacks the player character has different recovery times and deals more or less damage.
				The game allows to choose between a freeflow combat system and a normal one.
			</p>
            <div className="row">
                <img className="zoom-hover" src="images/Graveyard_Beatdetection.PNG" alt="Graveyard-Screenshot_1" width="49%" height="49%"/>
				<img className="zoom-hover" src="images/Graveyard_Beatdetection_2.PNG" alt="Graveyard-Screenshot_1" width="49%" height="49%"/>			
            </div>
            <sub>Ingame screenshots.</sub>
            <hr/>
            <h3>Creating Tools to aid the Process</h3>
            <p>
				To help with the process I created an audio tool which provides simple controls, allows to configure the rythm as well as to create generic audio events (Similar to animation events).
			<br/><br/>
				Upon creating or selecting a sound element, the editor creates a waveform and populates the window with existing events.
				Each event consists of a method name and a set of generic values.
				Methods with a corresponding name to the event configured in the editor are then invoked during the runtime of the game.
			</p>
            <div className="row">
                <div>
				    <img className="zoom-hover" src = "images/SoundEditor_Create.png" alt="Sound Editor - Creation Window" width="95%" height="95%"/>
				    <sub>Creation of a sound element.</sub>
				</div>
                <div>
                    <img className="zoom-hover" src = "images/SoundEditor_Events.png" alt="Sound Editor - Event Window"  width="95%" height="95%"/>
				    <sub>Authoring events in the editor.</sub>
                </div>
			</div>
            <hr/>
			<h3>Approximating the BPM</h3>
            <table className="alternating-table enclosed-table">
				<tbody>
					<tr>
						<td>Tap recordings&emsp;&emsp;</td>
						<td>Invoked through "Add Recording". Counts the space-bar-button presses over a given sample duration.</td>
					</tr>
					<tr>
						<td>Automatic</td>
						<td>Divides the audio track into bands of frequencies. Compares the energy changes over a time lag. 
							(Works better the more emphasized the rhythm is)</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td>(See figure below)</td>
					</tr>
				</tfoot>
			</table>
            <p>
				To improve the "feel" of the rhythm, the tool suggests the use of an animation curve to modify the return value between two beats - it can be used to widen the input window 
				or to create easing for visual effects.
			</p>
			<img className="zoom-hover" src = "images/SoundEditor_Rhythm_config.png" alt="Sound Editor - Rythm Configuration" width="49%" height="49%"/>
			<sub>Configuring the rhythm.</sub>
            <br/><br/>
            <h4>Important links:</h4>
			<blockquote>
				<a href ="https://github.com/YassineBoutaouas/BeatDetection">Beat Detection - GitHub</a>
                <br/>
				<a href ="https://drive.google.com/file/d/1bzefD9Ny1B7jrw_80UMpbB7UpQsgcsMD/view?usp=sharing">(G)raveyard - Build</a>
			</blockquote>
        </BasePage>
    );
}