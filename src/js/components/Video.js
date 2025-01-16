export default function Video(props){ 
  return (
    <div>
        <video
            src={props.src}
            width={props.width}
            controls
            loop={props.loop}
            autoPlay={props.autoPlay}
        />
      </div>
  ); 
};