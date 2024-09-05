import { useState } from 'react';
import { Link } from 'react-router-dom';

import BasePage from './BasePage';
import Ability from '../components/ProgressBar';
import Article from '../components/Article';

export default function Projects(){
    const [skillsTab, ToggleSkillsTab] = useState(false);
    const OpenSkillsTab = (e) => {
      if(skillsTab === true)
        return;
      
      e.target.classList.toggle("toggle-button-active");
      e.target.previousSibling.classList.toggle("toggle-button-active");
      ToggleSkillsTab(true);
    }

    const CloseSkillsTab = (e) => {
      if(skillsTab === false)
        return;

      e.target.classList.toggle("toggle-button-active");
      e.target.nextSibling.classList.toggle("toggle-button-active");
      ToggleSkillsTab(false);
    }

    let displayedPage = ProjectsPage();
    if(skillsTab === true)
      displayedPage = SkillsPage();
    else
      displayedPage = ProjectsPage();

    return (
      <BasePage title="Yassine Boutaouas (BA.)" tab="Portfolio.">
        <h1>Portfolio.</h1>
        <p>
					This page contains a collection of relevant projects. A description of each project is provided along with links to GitHub
					repositories. If you want to read more about me, you can do so on the <Link to="/AboutMe">About me sub-page.</Link>
				</p>

        <div className="row-no-space">
          <button className="toggle-button-left toggle-button-active" onClick={CloseSkillsTab}>Projects</button>
          <button className="toggle-button-right" onClick={OpenSkillsTab}>Skills</button>
        </div>
        {displayedPage}
      </BasePage>
    );
}

function SkillsPage(){
   return(
    <div>
      <h3>About the scales</h3>
			<p align="justify">
				Since there is no universally agreed-upon definition of 100% proficiency in programming concepts or languages, 
				these scales should be interpreted in relation to each other. For example, this implies that I am more at ease 
				with object-oriented programming than with data-oriented programming.
			</p>
      <hr/>
      <h3>Programming</h3>
      <Ability label="Object-Oriented Programming" percentage="90%"/>
      <Ability label="Data-Oriented Programming" percentage="60%"/>
      <Ability label={'Graphics Progamming\n(OpenGL)'} percentage="70%"/>
      <Ability label={'Shaders\n(GLSL | HLSL)'} percentage="70%"/>
      <Ability label={'Frontend\n(ReactJS)'} percentage="50%"/>
      <hr/>
      <h3>Languages</h3>
      <Ability label={'Microsoft .NET C#'} percentage="90%"/>
      <Ability label={'C++'} percentage="85%"/>
      <Ability label={'JavaScript'} percentage="50%"/>
      <Ability label={'Python'} percentage="50%"/>
      <hr/>
      <h3>Project Management</h3>
      <Ability label={'VCS\n(GitHub | Perforce | GitLab)'} percentage="75%"/>
      <Ability label={'SCRUM\n(Backlog Grooming | Task Tracking etc.)'} percentage="75%"/>
    </div>
   );
}

function ProjectsPage(){
  let goapTags = ['cpp','ai', 'mt','oop'];
  let crowdSimTags = ['csharp','unity', 'dots','ecs'];
  let graphicsTags = ['cpp','opengl', 'three-d', 'glsl', 'imgui'];
  let gameplayTags = ['csharp','unity', 'ui', 'xml', 'css'];

  return (
    <div>
      <div className="grid2x2">
        <Article src="images/GOAP_Pic.png" header="Goal-Oriented Action Planning" color="#00798C" articleTags={goapTags} link="/Goap">
          A Goal-Oriented Action Planning solution developed for a bachelor thesis.
        </Article>
        <Article src="images/CrowdSim_Pic.png" header="Realtime Crowd Simulation" color="#D1495B" articleTags={crowdSimTags} link="/CrowdSim">
          Comparison and implementation of different approaches to realtime crowd simulation.
        </Article>
        <Article src="images/Graphics_Programming_Pic.png" header="3D Render Engine" color="#877846" articleTags={graphicsTags} link="/RenderEngine">
          A 3D render engine supporting obj-files, an interactive viewport and an entity-component workflow.
        </Article>
        <Article src="images/Gameplay_Pic.png" header="Gameplay & Tool Programming" color="#3F3047" articleTags={gameplayTags} link="/Gameplay">
          An example of gameplay systems and tools created to aid the development process.
        </Article>
      </div>
    </div>
  );
}