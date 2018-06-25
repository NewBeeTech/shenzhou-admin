/**
 * Happy Hacking
 * Created by leiyouwho on 6/5/2016.
 */

import React, { PropTypes } from "react";


function CheckboxWidget({
  schema,
  id,
  value,
  required,
  readonly,
  disabled,
  placeholder,
  onChange,
  label,
}) {
  if (readonly) {
    const shouldHide = value ? 'flex' : 'none';
    return (
      <div style={{ display: shouldHide }}>{value}</div>
    );
  }
  return (
    <div className={`checkbox ${disabled ? "disabled" : ""}`}>
      <label>
        <input type="checkbox"
               id={id}
               title={placeholder}
               checked={typeof value === "undefined" ? false : value}
               required={required}
               disabled={disabled}
               onChange={(event) => onChange(event.target.checked)} />
        <strong>{label}</strong>
      </label>
    </div>
  );
}
if (process.env.NODE_ENV !== "production") {
  CheckboxWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.bool,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
  };
}

export default CheckboxWidget;
