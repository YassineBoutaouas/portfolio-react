import { useState } from 'react';

export default function Collapsible(props){
    const [active, ToggleActive] = useState(false);
    const ToggleContentState = (e) => {
        var content = e.target.nextElementSibling;
        e.target.classList.toggle("active-collapsible");

        ToggleActive(!active);

        if (active === false){
            content.style.maxHeight = content.scrollHeight + "px";
            return;
        }

        content.style.maxHeight = null;
    }

    let data;
    if(props.asTable === true)
        data = RenderTableRows(props.tableData);
    else
        data = RenderChildren(props.children);

    return (
        <div>
            <button className="collapsible" onClick={ToggleContentState}>{props.title}</button>
            <div className="collapsible-content">
                {data}
            </div>
        </div>
    );
}

function RenderChildren(children){
    return(
        <div key="children">
            <br></br>
            {children}
        </div>
    );
}

  function RenderTableRows(tableData) {
    if (!tableData) return null;
    let result = [];
    tableData.data.forEach((entry, index) => {
      result.push(
        <tr key={index + 1}>
          <td><a href={entry.link}>[{index + 1}]</a> {entry.description}</td>
        </tr>
      )
    });

    return (
        <table>
            <tbody>
                {result}
            </tbody>
        </table>
    );
  }