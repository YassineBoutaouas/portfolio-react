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
						<a href="home.html">About Me</a>
						<a id="topbar-icon" href="mailto:y.boutaouas@gmail.com" className="icon solid fa-envelope"><span className="label">Email</span></a>
						<a id="topbar-icon" href="https://github.com/YassineBoutaouas" className="icon brands fa-github"><span className="label">GitHub</span></a>
						<a id="topbar-icon" href="https://www.linkedin.com/in/yassineboutaouas/" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a>
					</li>
					<li><a href="index.html">Projects</a></li>
					<li className="indent"><a href="goap.html">Goal-Oriented Action Planning</a></li>
					<li className="indent"><a href="renderengine.html">3D Render Engine</a></li>
					<li className="indent"><a href="crowdsimulation.html">Crowd Simulation</a></li>
					<li className="indent"><a href="gameplay.html">Gameplay Programming</a></li>
				</ul>
			</div>
        </header>
    );
}