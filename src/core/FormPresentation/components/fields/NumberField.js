/**
 * Happy Hacking
 * Created by leiyouwho on 5/5/2016.
 */

import React, { PropTypes } from 'react';

import { asNumber } from '../../utils';
import StringField from './StringField';

function NumberField(props) {
  return (
    <StringField
      { ...props }
      onChange={(value) => props.onChange(asNumber(value))}
    />
  );
}

NumberField.propTypes = {
  schema: PropTypes.object.isRequired,
  idSchema: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  formData: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  required: PropTypes.bool,
};

NumberField.defaultProps = {
  uiSchema: {},
};

export default NumberField;
