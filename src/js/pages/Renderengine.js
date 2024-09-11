import BasePage from './BasePage';
import Video from '../components/Video';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import InspectableContainer from '../components/InspectableContainer';
import Collapsible from '../components/Collapsible';

export default function Renderengine(){
    const inspectables = {
        data: [
            {id:"editor-viewport", top:"0%", left:"10.3%", width:"43.7%", height: "72.6%", borderRadius:"0", 
                description: 
                <p>
                    The <b>interactive viewport</b> simply displays the current rendered scene.
                </p>
            },
            {id:"editor-hierarchy", top:"0", left:"0", bottom:"0", width:"10.3%", borderRadius:"4px 0 0 4px",
                description:
                <p>
                    The <b>scene hierarchy panel</b> displays a list of all the entities within the current scene. Each entity can be selected and 
					modified in the inspector panel. A scene contains entities and components, while each entity holds an arbitrary list of components. 
					Related scenes, entities, and components can cross-reference each other.
                </p>
            },
            {id:"editor-console", top:"72.5%", left:"10.3%", width:"43.7%", bottom:"0", borderRadius:"0",
                description:
                <p>
					The <b>console panel</b> prints messages, errors and warnings. 
                    The <b>metrics panel</b> displays the current fps (not shown in current image).
                </p>
            },
            {id:"editor-inspector", top:"0", left:"54%", width:"21%", height:"59.5%", borderRadius:"0 4px 0 0",
                description:
                <p>
                    The <b>inspector panel</b> accesses a UI-registry, renders each component currently held by the selected entity and provides access to them. 
					Such components are: Transform, DirectionalLight, Camera and Mesh (including material properties and textures). 
					Components such as physics components for example can be added to the project and rendered in the inspector as well.
                </p>
            },
            {id:"editor-processing", top:"59.5%", left:"54%", width:"21%", bottom:"0", borderRadius:"0 0 4px 0",
                description:
                <p>
                    The <b>post-processing panel</b> grants access to various post-processing and rendering effects. 
					The current post-processing stack includes post-exposure, shadow rendering, and bloom. 
					Additionally, it displays the current skybox texture.
                </p>
            }
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

    let thirdpartyAssets = {
        data: [
          { link: 'https://www.glfw.org/', description: 'glfw - Window Creation' },
		  { link: 'https://github.com/ocornut/imgui', description: 'Dear ImGUI - UI Solution'},
		  { link: 'https://www.opengl.org/sdk/libs/GLM/', description: 'glm - Math Library'},
		  { link: 'https://polyhaven.com/a/round_wooden_table_01', description: 'Table - Model and Textures'},
		  { link: 'https://polyhaven.com/a/brass_goblets', description: 'Goblets - Model and Textures'},
		  { link: 'https://polyhaven.com/a/chinese_chandelier', description: 'Chandelier - Model and Textures'},
		  { link: 'https://sketchfab.com/3d-models/damaged-helmet-a1de6f1e738d446da3d50a3eebffe883', description: 'Helmet - Model and Textures'},
		  { link: 'https://polyhaven.com/a/coral_stone_wall', description: 'Stone Wall Texture'},
		  { link: 'https://polyhaven.com/a/tief_etz', description: 'Forest HDRI Texture'},
		  { link: 'https://polyhaven.com/a/sunflowers_puresky', description: 'Sunflowers (Pure Sky) HDRI Texture'}
        ]
      };

    return(
        <BasePage title="Projects" tab="3D Engine.">
            <h1>3D Render Engine</h1>
            <img className="banner" src="images/RenderEngine_Banner.png" alt="Renderengine_Banner"/>
            <p>
				This project contains a realtime 3D renderer. It provides an .obj file-parser, an interactive 3D viewport and supports an entity-component-workflow.
				The aim of the project is to learn about various rendering concepts and realtime 3D application-workflows.
			<br/><br/>
				The project is written in C++, whereas shaders are written in GLSL.
				It uses <a href="https://www.opengl.org/">OpenGL</a> along with <a href="https://github.com/ocornut/imgui">Dear ImGUI</a>, <a href="https://www.glfw.org/">glfw</a> and the <a href="https://www.opengl.org/sdk/libs/GLM/">glm-math</a> library. 
			</p>
            <hr/>
            <h3> Editor components </h3>
			<p>
				An overview of all the editor components shown in the GUI. 
				The editor aims to provide simple functionalities and acess to the underlying structures. 
				Click on the individual panels in the image to examine the editor (with an explanation provided below the image).
			</p>

            <InspectableContainer src="images/Renderer_Editor.png" width="75%" height="75%" elements={inspectables}/>
            <hr/>
            <h3>The renderer and its features</h3>
            <p>
				The forward renderer provides a shader-material workflow which 
				stores arbitrary uniform data in a buffer. Material properties can then be modified in the inspector. 
				The project provides a pbr shader (incl. IBL) and a toon shader.
			</p>
            <Video path="videos/Building_Scene.mp4" width="80%" height="80%" loop={true} autoPlay={true}/>
            <hr/>
            <h3>Future Considerations</h3>
			<p>
				In the current state of the render engine there are a lot of aspects and features that have to be considered. 
				The most important ones are related to performance and usability. 
				Other aspects that are important as well such as render-batching, an improved post-processing stack or adding 
				rendering features like reflections or raytracing may be considered later.
			</p>
            <FullScreen handle={handle}>
                <img className="expandable" src="images/RenderEngine-ToDo.svg" width="80%" height="80%" alt="GOAP-Solution" onClick={ChangeFullscreen}/>
    			<sub>Some important improvements that have to be considered.</sub>
            </FullScreen>
            <hr/>
            <Collapsible title="Third party assets" tableData={thirdpartyAssets} asTable={true}></Collapsible>
            <h4>To the project:</h4>
            <blockquote><i>GitHub Link available soon</i></blockquote>
        </BasePage>
    );
}