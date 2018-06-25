/**
 * Happy Hacking
 * Created by leiyouwho on 5/5/2016.
 */

import React, { PropTypes } from 'react';


function BaseInput(props) {
  const { value, readonly, onChange } = props;
  return (
    <div
      style={{ display: 'flex' }}
    >
      <input
        {...props}
        className="form-control"
        readOnly={readonly}
        value={typeof value === 'undefined' ? '' : value}
        onChange={(event) => onChange(event.target.value)}
      />
      {props.schema.tailTitle}
    </div>
  );
}

BaseInput.defaultProps = {
  type: 'text',
  required: false,
  disabled: false,
  readonly: true,
};

BaseInput.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  onChange: PropTypes.func,
};

export default BaseInput;

