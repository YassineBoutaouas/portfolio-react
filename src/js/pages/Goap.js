import { FullScreen, useFullScreenHandle } from "react-full-screen";

import BasePage from './BasePage.js';
import Video from '../components/Video.js';
import Collapsible from '../components/Collapsible.js';
import Banner from '../components/Banner.js'

export default function Goap(){
    const thirdpartyAssets = {
        data: [
            { link: "https://www.sfml-dev.org/", description: 'SFML - Graphics Library' },
            { link: "https://brullov.itch.io/oak-woods", description: 'Oak Woods - Environment and Character Sprite' },
            { link: "https://www.dafont.com/de/vcr-osd-mono.font", description: 'Font Asset' },
            { link: "https://assetstore.unity.com/packages/3d/environments/fantasy/polygon-vikings-low-poly-3d-art-by-synty-85664", description: 'Polygon - Vikings Pack - Unity Visualization' }
        ]
    };
    
    const handle = useFullScreenHandle();
    const ChangeFullscreen = (e) =>{
        e.target.classList.toggle("expandable-active");
        if(handle.active === true)
            handle.exit();
        else
            handle.enter();
    }

    return(
        <BasePage title="Projects" tab="GOAP.">
            <h1>Goal-Oriented Action Planning</h1>
            <Banner src="images/GOAP_Banner.png" href="https://github.com/YassineBoutaouas/GOAP_Project"/>
            <p>
				This project contains a multi-project-solution for a Goal-Oriented Action Planning AI (GOAP) developed with C++ 17. 
				It was developed within the scope of a bachelor thesis. The project proposes general algorithmic changes to GOAP
				to improve the overall performance of the system.
			<br/>
			<br/>
				Goal-Oriented Action Planning introduces actions, world states and goals, as well as a precondition-effect schema to „generate“ procedural
				finite state machines at runtime through the use of the A* algorithm <a href="https://www.gdcvault.com/play/1022019/Goal-Oriented-Action-Planning-Ten">[1]</a>.
			</p>

            <img src = "images/GOAP_Plan.png" alt="GOAP-Schema" width="85%" height="85%"/>
			<sub>Example of a plan using the proposed backward planning model. Left to Right (Planning order), Right to Left (Execution order).</sub>

            <p>
			<br/>
				The algorithm starts to look for an action that would satisfy the goal (In this case the goal consists of the variable "IsPlayerDead" : True).
				The example shown in the figure above assumes that the precondition ("HasGun" : True) for the shoot action is already satisfied by the world state, 
				showing that the system considers the world state during each step of the planning phase.
				Each action has a cost, so that the algorithm is able to find the cheapest sequence of actions that would satisfy a goal. If there is no plan for the 
				current most important goal, the system chooses the next most important one.
			</p>
            <hr/>
            <h3>Overview</h3>
			<embed id="goap-uml" src="images/goap-uml.pdf" type="application/pdf" width="80%" height="700px"/>
			<sub>Complete UML diagram.</sub>
			<hr/>
            <h3>Example simulation</h3>
            <Video src="videos/GOAP_Sim.mp4" width="60%" loop={true}/>
            <sub>Example simulation containing multiple goals and plans prototyped in the Unity Engine.</sub>
            <hr/>
            <FullScreen handle={handle}>
                <img className="expandable" src="images/GOAP_CPP.png" width="85%" height="85%" alt="GOAP-Solution" onClick={ChangeFullscreen}/>
    			<sub>Screenshot of the working C++ application. Current plan highlighted yellow.</sub>
            </FullScreen>
            <hr/>
            <Collapsible title="Third Party Assets" asTable={true} tableData={thirdpartyAssets}/>
            <h4>Important links:</h4>
            <blockquote><a href="https://github.com/YassineBoutaouas/GOAP_Project">GitHub Link</a></blockquote>
        </BasePage>
    );
}