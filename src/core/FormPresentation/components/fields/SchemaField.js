/**
 * Happy Hacking
 * Created by leiyouwho on 5/5/2016.
 */


import React, { PropTypes } from 'react';
import ArrayField from './ArrayField';
import BooleanField from './BooleanField';
import NumberField from './NumberField';
import ObjectField from './ObjectField';
import StringField from './StringField';
import UnsupportedField from './UnsupportedField';
import Wrapper from '../Wrapper';

const COMPONENT_TYPES = {
  array: ArrayField,
  boolean: BooleanField,
  integer: NumberField,
  number: NumberField,
  object: ObjectField,
  string: StringField,
};

function getFieldComponent(schema, uiSchema ) {
  // const field = uiSchema["ui:field"];
  // if (typeof field === "function") {
  //   return field;
  // }
  // if (typeof field === "string" && field in fields) {
  //   return fields[field];
  // }
  return COMPONENT_TYPES[schema.type] || UnsupportedField;
}


const SchemaField = (props) => {
  const { uiSchema, errorSchema, idSchema, name, required, registry, readonly, formData } = props;
  // const { definitions, fields } = registry;
  // const schema = retrieveSchema(props.schema, definitions);
  const schema = props.schema;
  const FieldComponent = getFieldComponent(schema, uiSchema );
  const disabled = Boolean(props.disabled || uiSchema['ui:disabled']);
  // const readonly = Boolean(props.readonly || uiSchema['ui:readonly']);
  if (Object.keys(props.schema).length === 0) {
    return <div />;
  }
  // 是否显示标题
  let displayLabel = true;
  if (schema.type === 'array') {
    // displayLabel = isMultiSelect(schema);
  }
  if (schema.type === 'object') {
    displayLabel = false;
  }
  if (schema.type === 'boolean' && !uiSchema['ui:widget']) {
    displayLabel = false;
  }

  return (
    <Wrapper
      label={props.schema.title || schema.title || name}
      errorSchema={errorSchema}
      hidden={uiSchema['ui:widget'] === 'hidden'}
      help={uiSchema['ui:help']}
      required={required}
      readonly={readonly}
      type={schema.type}
      displayLabel={displayLabel}
      formData={formData}
      // id={idSchema.id}
      classNames={uiSchema.classNames}
    >
      <FieldComponent
        {...props}
        shema={props.schema}
        readonly={readonly}
        // disabled={disabled}
      />
    </Wrapper>
  );
};
SchemaField.propTypes = {
  schema: PropTypes.object.isRequired,
  uiSchema: PropTypes.object,
  formData: PropTypes.any,
  readonly: PropTypes.bool,
};
SchemaField.defaultProps = {
  uiSchema: {},
  readonly: false,
};

export default SchemaField;
