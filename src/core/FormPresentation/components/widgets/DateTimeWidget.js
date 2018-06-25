/**
 * Happy Hacking
 * Created by leiyouwho on 17/5/2016.
 */

import React, { PropTypes } from 'react';

import BaseInput from './BasicInput';

import { DatePicker } from 'antd';
import moment from 'moment';



function fromJSONDate(jsonDate) {
  return jsonDate ? new Date(jsonDate).toJSON().slice(0, 19) : "";
}

function toJSONDate(dateString) {
  if (dateString) {
    return new Date(dateString).toJSON();
  }
}

function DateTimeWidget(props) {
  const { value, onChange } = props;
  // return (
  //   <BaseInput
  //     type="datetime-local"
  //     {...props}
  //     value={fromJSONDate(value)}
  //     onChange={(value) => onChange(toJSONDate(value))}
  //   />
  // );
  return (
    <div>
      <DatePicker
        // {...props}
        value={ value ? moment(value, 'YYYY-MM-DD') : '' }
        onChange={(value, dateString) => onChange(dateString)}
        format="YYYY-MM-DD"
      />
    </div>
  );
}

if (process.env.NODE_ENV !== "production") {
  DateTimeWidget.propTypes = {
    value: PropTypes.string,
  };
}

export default DateTimeWidget;
