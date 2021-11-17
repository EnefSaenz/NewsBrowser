import React, { useState } from "react";

const useCountry = (stateInitial, options) => {
  const [state, setState] = useState(stateInitial);
  const SelectCountry = () => (
    <select
      className="browser-default"
      value={state}
      onChange={(e) => setState(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
  return [state, SelectCountry];
};

export default useCountry;
