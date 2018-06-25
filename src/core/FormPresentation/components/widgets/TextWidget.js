/**
 * Happy Hacking
 * Created by leiyouwho on 5/5/2016.
 */

import React, { PropTypes } from 'react';

import BaseInput from './BasicInput';


function TextWidget(props) {
  if (props.readonly) {
    return (
      <div>{props.value}</div>
    );
  }
  return (
    <div>
      <BaseInput {...props} />
    </div>
  );
}

TextWidget.propTypes = {
  value: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
};

export default TextWidget;
