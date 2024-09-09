export default function Inspectable(props){
    let styleClass = "inspectable-active";

    const selectStyle = () => {
        if(props.currentIndex === 0){
            styleClass = "inspectable";
            return;
        }

        if(props.childIndex !== props.currentIndex)
            styleClass = "inspectable-inactive";
    }

    selectStyle();

    return(
        <div 
            className={styleClass}
            style={{
            top: props.top, 
            left: props.left, 
            right:props.right, 
            bottom: props.bottom, 
            width:props.width, 
            height: props.height,
            borderRadius: props.borderRadius
            }}
            onClick={props.onClick}
        />
    );
}