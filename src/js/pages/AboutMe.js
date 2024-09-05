import BasePage from './BasePage';

export default function AboutMe(){
    return(
        <BasePage title="Projects" tab="About Me.">
            <h1>About Me</h1>
            <img className="banner" src="images/AboutMe_Banner.png" alt="AboutMe_Banner"/>
        </BasePage>
    );
}