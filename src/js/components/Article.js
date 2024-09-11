import {Link}  from 'react-router-dom';

export default function Article(props){
    return(
        <article style={{backgroundColor: props.color}}>
		    <img src={'/' + props.src} alt=""/>
			<div className="tags">
				{RenderTags(props.articleTags)}
			</div>
			<Link to={props.link}>
				<h2>{props.header}</h2>
				<div>
					<p>{props.children}</p>
				</div>
			</Link>
		</article>
    );
}

function RenderTags(articleTags){
	if (!articleTags) return null;
	let result = [];
	articleTags.map((entry) => {
	  result.push(
		<div key={entry} id={entry} className="icon"/>
	  )

	  return articleTags;
	});
	return result;
}