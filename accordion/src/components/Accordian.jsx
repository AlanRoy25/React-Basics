//single selection
// multi selection

import { useState } from "react";
import data from "./data";
import "./styles.css";

function Accordian() {
  const [selected, setSelected] = useState([]);
  const [enableMultiselection, setEnableMultiselection] = useState(false);

  function HandlesingleSelection(getCurrentId) {
    setSelected(selected.includes(getCurrentId) ? [] : [getCurrentId]);
  }

  function HandleMultiselection(getCurrentId) {
    if (selected.includes(getCurrentId)) {
      setSelected(selected.filter((id) => id !== getCurrentId));
    } else {
      setSelected([...selected, getCurrentId]);
    }
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiselection(!enableMultiselection)}>
        {enableMultiselection
          ? "Disable Multi-selection"
          : "Enable Multi-selection"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiselection
                    ? () => HandleMultiselection(dataItem.id)
                    : () => HandlesingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>

                <span>{selected.includes(dataItem.id) ? "-" : "+"}</span>
              </div>
              {selected.includes(dataItem.id) && (
                <div className="content">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
export default Accordian;
