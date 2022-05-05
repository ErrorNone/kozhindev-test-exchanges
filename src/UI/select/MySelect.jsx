import React from "react";
import cl from "./MySelect.module.css";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select className={cl.select} value={value} onChange={(event) => onChange(event.target.value)}>
      <option  value="" disabled>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.ID} value={option.Value * option.Nominal}>
          {option.Name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
