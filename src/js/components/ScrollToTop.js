export default function ScrollToTop(){
    return(
        <button className="scrollback" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}/>
    );
}