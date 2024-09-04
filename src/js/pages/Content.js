import Topbar from '../components/Topbar';

import Footer from "../components/Footer";
import Collapsible from "../components/Collapsible";
import Progressbar from "../components/ProgressBar";
import Video from "../components/Video";

function Content(){
	return(
		<div>
    	  <div id="overlay" onClick={Close}>
    	    <Topbar/>
    	    <div>{RenderContent()}</div>
    	  </div>
    	</div>
	);
}

function RenderContent(){
	let tableData = {
        tableData: [
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

	return (
		<div>
    <div class="inner">
			<h1>Portfolio.</h1>
			<h1>Header 1</h1>
			<h2>Header 2</h2>
			<h3>Header 3</h3>
			
			<hr/>

			<p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
				This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
				This is <u>underlined</u> and this is code: <code>for (;;) if(true) GetJob();</code>. 
				Finally, <a href=".">this is a link</a>.
			</p>

			<hr/>

			<h2>Table</h2>
			<div>
				<h3>Default</h3>
				<table class="alternating-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Description</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Item One</td>
							<td>Ante turpis integer aliquet porttitor. Ante turpis integer aliquet porttitor. Ante turpis integer aliquet porttitor. Ante turpis integer aliquet porttitor. Ante turpis integer aliquet porttitor. Ante turpis integer aliquet porttitor. Ante turpis integer aliquet porttitor. Ante turpis integer aliquet porttitor. Ante turpis integer aliquet porttitor.</td>
							<td>29.99</td>
						</tr>
						<tr>
							<td>Item Two</td>
							<td>Vis ac commodo adipiscing arcu aliquet.</td>
							<td>19.99</td>
						</tr>
						<tr>
							<td>Item Three</td>
							<td> Morbi faucibus arcu accumsan lorem.</td>
							<td>29.99</td>
						</tr>
						<tr>
							<td>Item Four</td>
							<td>Vitae integer tempus condimentum.</td>
							<td>19.99</td>
						</tr>
						<tr>
							<td>Item Five</td>
							<td>Ante turpis integer aliquet porttitor.</td>
							<td>29.99</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="2"></td>
							<td>100.00</td>
						</tr>
					</tfoot>
				</table>

				<h3>Alternate</h3>
				<table class="enclosed-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Description</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Item One</td>
							<td>Ante turpis integer aliquet porttitor. Ante turpis integer aliquet porttitor. Ante turpis integer aliquet porttitor. Ante turpis integer aliquet porttitor. Ante turpis integer aliquet porttitor. Ante turpis integer aliquet porttitor. Ante turpis integer aliquet porttitor. Ante turpis integer aliquet porttitor. Ante turpis integer aliquet porttitor.</td>
							<td>29.99</td>
						</tr>
						<tr>
							<td>Item Two</td>
							<td>Vis ac commodo adipiscing arcu aliquet.</td>
							<td>19.99</td>
						</tr>
						<tr>
							<td>Item Three</td>
							<td> Morbi faucibus arcu accumsan lorem.</td>
							<td>29.99</td>
						</tr>
						<tr>
							<td>Item Four</td>
							<td>Vitae integer tempus condimentum.</td>
							<td>19.99</td>
						</tr>
						<tr>
							<td>Item Five</td>
							<td>Ante turpis integer aliquet porttitor.</td>
							<td>29.99</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="2"></td>
							<td>100.00</td>
						</tr>
					</tfoot>
				</table>
			</div>

			<h2>Lists</h2>
			<div class="row">
					<div>
						<h3>Unordered</h3>
						<ul>
							<li>Dolor pulvinar etiam.</li>
							<li>Sagittis adipiscing.</li>
							<li>Felis enim feugiat.</li>
						</ul>
					</div>
					<div>
						<h3>Ordered</h3>
						<ol>
							<li>Dolor pulvinar etiam.</li>
							<li>Sagittis adipiscing.</li>
							<li>Felis enim feugiat.</li>
						</ol>
					</div>
					<div>
						<h3>Alternate</h3>
						<ul class="alternate">
							<li>Dolor pulvinar etiam.</li>
							<li>Sagittis adipiscing.</li>
							<li>Felis enim feugiat.</li>
						</ul>
					</div>
			</div>
			<hr/>
			<div>
				<h3>Formatted</h3>
				<pre>
					<code>
						{
						`
i = 0;
while (!deck.isInOrder()) {
	print 'Iteration ' + i;
	deck.shuffle();
	i++;
}

print 'It took ' + i + ' iterations to sort the deck.';
						`}
					</code>
				</pre>
				<blockquote>
					GitHub Link:
				</blockquote>
			</div>
        </div>
		<div class="inner">
			<button>Default</button>
			<button class="primary">Primary</button>
		</div>
		
		<div class="inner">
			<hr/>
				<Collapsible text="Collapsible" tableData={tableData}></Collapsible>
			<hr/>
			<Progressbar label={'VCS\n(GitHub | Perforce | GitLab)'} percentage={'90%'}></Progressbar>
			<hr/>
			<img class="banner" src="images/GOAP_Banner.png" alt="GOAP_Banner"/>
			<Video path="videos/GOAP_Sim.mp4" autoPlay={true} loop={true} width="80%" height="80%"></Video>
			<sub>Simulation of the Goal-Oriented Action Planning AI</sub>
			<hr/>
			<img src="images/CrowdSim_Model.png"/>
			<sub>Algorithm description</sub>
			<hr/>
			<embed id="goap-uml" src="images/goap-uml.pdf" type="application/pdf" width="100%" height="800px"/>
			<sub>Complete UML of GOAP</sub>
		</div>
		<Footer></Footer>
		</div>
	);
}

export default Content;