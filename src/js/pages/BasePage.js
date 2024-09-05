import { useState } from 'react';
import { Helmet } from 'react-helmet';

import Menu from '../components/Menu';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';

export default function BasePage(props){
    const [menuActive, ToggleMenu] = useState(false);
    const CloseMenu = (e) => {
      if(menuActive === false)
        return;
  
      var content = document.getElementById("menu");
      var closeButton = content.firstChild;
      closeButton.style.opacity = 0;
  
      document.getElementById("overlay").classList.toggle("blur");
      content.classList.toggle("menu-active");
  
      e.preventDefault();
      e.stopPropagation();
      ToggleMenu(false);
    }

    return(
    <div>
      <Helmet>
        <title>{props.tab}</title>
      </Helmet>
      <Menu active={ToggleMenu} closeMenu={CloseMenu}/>
      <div id="overlay" onClick={CloseMenu}>
        <Topbar title={props.title}/>
        <div className="inner">
          {props.children}
        </div>
        <Footer/>
      </div>
    </div>
    );
}