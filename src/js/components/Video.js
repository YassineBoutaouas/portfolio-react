import { Player } from 'video-react';

export default function Video(props) {
    return (
        <div style={{width: props.width, height: props.height}}>
            <Player
              src={props.path}
              muted={true}
              autoPlay={props.autoPlay}
              fluid={true}
              loop={props.loop}
            />
        </div>
      );
}