export default function Banner(props) {
    const desc = props.href === "" ? "Available Soon" : "See Project";
    return (
        <div style={{position:"relative"}}>
            <img src={props.src} className="banner" alt="Banner"></img>
            <a className="github-link" href={props.href}>
                <div/>
                <p>{desc}</p>
            </a>
        </div>
    );
}