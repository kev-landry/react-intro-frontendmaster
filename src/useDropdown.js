import React, { useState } from "react";

// Generic dropdown hook

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const DropDown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={event => setState(event.target.value)}
        onBlur={event => setState(event.target.value)}
        disabled={options.length === 0}
      >
        <option>Tous</option>
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, DropDown, setState];
};

export default useDropdown;
