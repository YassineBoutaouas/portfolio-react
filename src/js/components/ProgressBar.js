export default function Progressbar({label, percentage}){
    return(
        <div className="ability">
			<p className="ability-label">{label}</p>
			<div className="progress-bar">
				<div style={{width: percentage}}></div>
			</div>
		</div>
    );
}