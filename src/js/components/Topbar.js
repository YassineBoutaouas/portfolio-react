import {Link}  from 'react-router-dom';

function Topbar({title}){
    return (
        <div>
            <div className="topbar">
                <div className="inner">
                    <Link id="topbar-icon" className="icon solid fa-home" to="/AboutMe"><span className="label">Get in touch</span></Link>
                    <a id="topbar-icon" href="mailto:y.boutaouas@gmail.com" className="icon solid fa-envelope"><span className="label">Email</span></a>
                    <a id="topbar-icon" href="https://github.com/YassineBoutaouas" className="icon brands fa-github"><span className="label">GitHub</span></a>
                    <a id="topbar-icon" href="https://www.linkedin.com/in/yassineboutaouas/" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a>
                </div>
            </div>
            <div id="header-space"></div>
            <div className="inner">
                <Link to="/" className="title">{title}</Link>
            </div>
        </div>
    );
}

export default Topbar;