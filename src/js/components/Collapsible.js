export default function Collapsible({text, tableData}){
    const ToggleContent = (e) => {
        var content = e.target.nextElementSibling;
        e.target.classList.toggle("active-collapsible");

        if (content.style.maxHeight){
            content.style.maxHeight = null;
            return;
        }

        content.style.maxHeight = content.scrollHeight + "px";
    }

    return (
        <div>
            <button className="collapsible" onClick={ToggleContent}>{text}</button>
            <div className="collapsible-content">
                <table>
                    <tbody>
                        {RenderTableRows(tableData)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function RenderTableRows({tableData}) {
    if (!tableData) return null;
    let result = [];
    tableData.forEach((entry, index) => {
      result.push(
        <tr>
          <td key={index + 1}><a href={entry.link}>[{index + 1}]</a> {entry.description}</td>
        </tr>
      )
    });
    return result;
  }