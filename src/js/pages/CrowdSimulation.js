import BasePage from './BasePage';
import Video from '../components/Video';
import Banner from '../components/Banner';

export default function CrowdSimulation(){
    return(
        <BasePage title="Projects" tab="Crowd Simulation.">
            <h1>Realtime Crowd Simulation</h1>
			<Banner src="images/CrowdSim_Banner.png" href="https://github.com/YassineBoutaouas/CrowdSimulation"/>
            <p>
				This project compares different approaches to realtime crowd simulation. Specifically, the project
				focuses on comparing object-oriented approaches to data-oriented approaches (DOTS).
				To accomplish this, the project conducts a series of experiments using Unity's Entity Component
				System to simulate crowds of non-player characters.
			</p>
            <hr/>
            <h3>An extended behavioral model</h3>
			<p>
				The simulation uses the behavioral model proposed by Craig W. Reynolds in "Flocks, Herds, and Schools: A
				Distributed Behavioral Model" <a href="https://doi.org/10.1145/37402.37406">[1]</a>. The simulation extends the behavior of Alignment, Repulsion and Attraction according to the publication 
				“On the Use of Virtual Animals with Artificial Fear in Virtual Environments” by Carlos Delgado-Mata <a href=" https://doi.org/10.1007/s00354-007-0009-5">[2] </a>. Instead of fear, the simulation uses 
				a flow-field to provide a sophisticated and directed steering behavior, which allows agents to have shared goals.
			</p>
            <img src="images/CrowdSim_Model.png" width="70%" height="70%" alt="CrowdSimulation Model"/>
			<sub>Behavioral Model According to <a href=" https://doi.org/10.1007/s00354-007-0009-5">[2] </a><br/><br/></sub>
			<Video src="videos/CrowdSimulation.mp4" autoPlay={true} loop={true} width="80%"></Video>
			<sub>Crowd simulation - Pathfinding Combined with Flocking Behaviors.</sub>
			<hr/>
			<h3>Results</h3>
			<p>
				Changing the programming paradigm from object-oriented programming to a data-oriented approach improves the performance of the system significantly. 
				The complete results as well as the program archtitecture can be found in the figure below.
			</p>
			<embed src="images/CrowdSim_Poster_PDF.pdf" type="application/pdf" width="80%" height="700px"/>
			<sub>Complete Results of the Conducted Research</sub>
			<hr/>
			<h3>Future considerations </h3>
			<p>
				The crowd simulation overall will greatly benefit from the inclusion of the RVO-algorithm. It would provide agents with proper avoidance. 
				Due to time constraints and the lacking documentation of Unity's DOTS API, the simulation at hand does not include a sophisticated avoidance behavior.
			</p>
			<h4>Important links:</h4>
			<blockquote><a href ="https://github.com/YassineBoutaouas/CrowdSimulation">GitHub Link</a></blockquote>
        </BasePage>
    );
}