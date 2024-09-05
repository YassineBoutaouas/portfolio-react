import {Link}  from 'react-router-dom';

export default function Menu(props){
	const OpenMenu = (e) => {
		var content = document.getElementById("menu");
		var closeButton = content.firstChild;
		closeButton.style.opacity = 1;
		document.getElementById("overlay").classList.toggle("blur");
		content.classList.toggle("menu-active");
	
		e.preventDefault();
		e.stopPropagation();
	
		props.active(true);
	}

    return (
        <header>
			<nav className="nav">
				<button onClick={OpenMenu}>Menu</button>
			</nav>

			
			<div id="menu" className="menu">
				<button className="close" onClick={props.closeMenu}>Close</button>
				<h2>Menu</h2>
				<ul className="alternate">
					<li>
						<Link to="/AboutMe">About Me</Link>
						<a id="topbar-icon" href="mailto:y.boutaouas@gmail.com" className="icon solid fa-envelope"><span className="label">Email</span></a>
						<a id="topbar-icon" href="https://github.com/YassineBoutaouas" className="icon brands fa-github"><span className="label">GitHub</span></a>
						<a id="topbar-icon" href="https://www.linkedin.com/in/yassineboutaouas/" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a>
					</li>
					<li><Link to="/">Projects</Link></li>
					<li className="indent"><Link to="/Goap">Goal-Oriented Action Planning</Link></li>
					<li className="indent"><Link to="/Renderengine">3D Render Engine</Link></li>
					<li className="indent"><Link to="/CrowdSim">Crowd Simulation</Link></li>
					<li className="indent"><Link to="/Gameplay">Gameplay & Tools</Link></li>
				</ul>
			</div>
        </header>
    );
}