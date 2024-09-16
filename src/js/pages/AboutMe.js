import BasePage from './BasePage';
import { Link } from 'react-router-dom';

export default function AboutMe(){
    return(
        <BasePage title="Projects" tab="About Me.">
            <h1>About Me</h1>
            <img className="banner" src="images/AboutMe_Banner.png" alt="AboutMe_Banner"/>
            <h2>Studies</h2>
			<p>
				My name is Yassine. I have studied <a href = "https://ag.mediencampus.h-da.de/">Animation&Game (B.A.) </a> at the UAS in Darmstadt. 
				The study program offers various disciplines centered around game development and allows to specialize in a few disciplines according to choice - programming in my case.
			<br/><br/>
				I have mostly worked on realtime applications, simulations and interactive software. 
				I have developed gameplay systems, editor tools to author different processes, UI systems, AI solutions, 
				shaders, a 3D graphics application and this static webpage.
			<br/><br/>
				During my studies I have done a six month long internship at Studio Seufz as a shader programmer and VFX artist, working on the game Lucky Tower Ultimate.
			</p>
			<h2>Outlook</h2>
			<p>
				After acquiring my bachelors degree I am looking to expand my programming knowledge in various fields of software development. 
				I have therefore decided to study <a href="https://www.frankfurt-university.de/en/studies/master-programs/general-computer-science-msc/for-prospective-students/">
					 General Computer Science (M.Sc.)</a> at the UAS in Frankfurt.
			</p>
			<p>
				If you are interested in seeing some examples of projects I have developed you can explore my <Link to="/">projects-sub-page.</Link>
			</p>
        </BasePage>
    );
}