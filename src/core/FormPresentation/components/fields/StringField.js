/**
 * Happy Hacking
 * Created by leiyouwho on 5/5/2016.
 */

import React, { PropTypes } from 'react';

import TextWidget from '../widgets/TextWidget';
import SelectWidget from '../widgets/SelectWidget';
import {
  defaultFieldValue,
  getAlternativeWidget,
  optionsList,
  getDefaultRegistry,
} from '../../utils';


function StringField(props) {
  const {
    schema,
    name,
    uiSchema,
    idSchema,
    formData,
    registry,
    required,
    disabled,
    readonly,
    onChange,
  } = props;
  const {title, description} = schema;
  // const {widgets} = registry;
  const widget = uiSchema['ui'] || schema.format;
  const commonProps = {
    schema,
    id: idSchema && idSchema.id,
    label: title || name,
    placeholder: description,
    onChange,
    value: defaultFieldValue(formData, schema),
    required,
    disabled,
    readonly,
  };

  // TODO: 暂不考虑string list
  // if (Array.isArray(schema.enum)) {
  //   if (widget) {
  //     const Widget = getAlternativeWidget(schema, widget );
  //     return <Widget options={optionsList(schema)} {...commonProps} />;
  //   }
  //   return <SelectWidget options={optionsList(schema)} {...commonProps} />;
  // }
  // // TODO: 暂不考虑自定义组件
  // if (widget) {
  //   const Widget = getAlternativeWidget(schema, widget );
  //   return <Widget {...commonProps} />;
  // }
  if (schema.format === 'text-label') {
    return <div />;
  }

  return <TextWidget {...commonProps} />;
}

if (process.env.NODE_ENV !== "production") {
  StringField.propTypes = {
    schema: PropTypes.object.isRequired,
    idSchema: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    formData: PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    registry: PropTypes.shape({
      widgets: PropTypes.objectOf(PropTypes.func).isRequired,
      fields: PropTypes.objectOf(PropTypes.func).isRequired,
      definitions: PropTypes.object.isRequired,
    }),
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
  };
}

StringField.defaultProps = {
  uiSchema: {},
  disabled: false,
  readonly: false,
};

export default StringField;
