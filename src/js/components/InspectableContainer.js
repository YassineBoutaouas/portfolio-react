import React from 'react';
import { useState } from 'react';
import Inspectable from './Inspectable';

export default function InspectableContainer({src, width, height, elements}){
    const [currentChildIndex, SetChild] = useState(0);
    let children = RenderChildren(elements, SetChild, currentChildIndex);

    return(
        <div>
            <div className="inspectable">
                <img src={src} alt={src} width={width} height={height}/>
                {children}
            </div>
            {elements.data.at(currentChildIndex).description}
        </div>
        );
}

function RenderChildren(elements, SetChild, state){
    let result = [];

    elements.data.forEach((child, index) => {
        result.push(
            <Inspectable 
            key={index} 
            id={child.id} 
            top={child.top} 
            left={child.left} 
            right={child.right} 
            bottom={child.bottom} 
            width={child.width}
            height={child.height}
            borderRadius={child.borderRadius}
            onClick={() => { SetChild(index) }}
            currentIndex={state}
            childIndex={index}
            />
        )
      });

      return result;
}