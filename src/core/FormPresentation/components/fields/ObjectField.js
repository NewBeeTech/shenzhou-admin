/**
 * Happy Hacking
 * Created by leiyouwho on 5/5/2016.
 */

import React, { Component, PropTypes } from "react";

import {
  getDefaultFormState,
  orderProperties,
  retrieveSchema,
  shouldRender,
  // getDefaultRegistry,
  setState
} from "../../utils";

import SchemaField from './SchemaField';

class ObjectField extends Component {
  static defaultProps = {
    uiSchema: {},
    errorSchema: {},
    idSchema: {},
    // registry: getDefaultRegistry(),
    required: false,
    disabled: false,
    readonly: false,
  }

  constructor(props) {
    super(props);
    this.state = this.getStateFromProps(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.getStateFromProps(nextProps));
  }

  uidisabled(name) {
    var uidisable = false;
    if ('ui:disArr' in this.props.uiSchema) {
      let disabledKey;
      // console.log('uiSchema: ', this.props.uiSchema);
      Object.keys(this.props.uiSchema['ui:disArr']).map(key => {
        disabledKey = key;
        // console.log('key: ', key);
        console.log('formData: ', this.props.formData);
        // console.log('jsonSchema: ', this.props.schema);
      });
      // console.log('name: ', name);
      // console.log('disarr: ', this.props.uiSchema['ui:disArr'][disabledKey]);
      this.props.uiSchema['ui:disArr'][disabledKey].map(key => {
        if (name === key) {
          // console.log('name:', name);
          // console.log('this.state', this.state);
          uidisable = this.props.formData[disabledKey];
          // if (uidisable) {
          //   this.setState({
          //     [name]: false,
          //   });
          // }
          // console.log('this.state', this.state);
        }
      });
    }
    return uidisable;
  }

  getStateFromProps(props) {
    const { schema, formData } = props;
    return getDefaultFormState(schema, formData ) || {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shouldRender(this, nextProps, nextState);
  }

  isRequired(name) {
    const schema = this.props.schema;
    return Array.isArray(schema.required) &&
      schema.required.indexOf(name) !== -1;
  }

  asyncSetState(state) {
    setState(this, state, () => this.props.onChange(this.state));
  }

  onPropertyChange = (name) => {
    return (value) => {
      this.asyncSetState({[name]: value});
    };
  };

  render() {
    const {
      uiSchema,
      errorSchema,
      idSchema,
      name,
      required,
      disabled,
      readonly,
    } = this.props;
    // if ('ui:multi' in uiSchema) {
    //   console.log(uiSchema);
    // }
    // const {definitions, fields} = this.props.registry;
    // const {SchemaField, TitleField} = fields;
    // const schema = retrieveSchema(this.props.schema, definitions);
    const schema = this.props.schema;
    const title = schema.title || name;
    let orderedProperties;
    try {
      const properties = Object.keys(schema.properties);
      orderedProperties = orderProperties(properties, uiSchema["ui:order"]);
    } catch(err) {
      return (
        <div>
          <p className="config-error" style={{color: "red"}}>
            Invalid {name || "root"} object field configuration:
            <em>{err.message}</em>.
          </p>
          <pre>{JSON.stringify(schema)}</pre>
        </div>
      );
    }
    return (
      <fieldset>
        <h5>{title}</h5>
        {schema.description ?
          <p className="field-description">{schema.description}</p> : null}
        {
          orderedProperties.map((name, index) => {
            return (
              <SchemaField
                key={index}
                name={name}
                required={this.isRequired(name)}
                schema={schema.properties[name]}
                uiSchema={uiSchema[name]}
                errorSchema={errorSchema[name]}
                idSchema={idSchema[name]}
                formData={this.state[name]}
                onChange={this.onPropertyChange(name)}
                // registry={this.props.registry}
                // disabled={disabled}
                disabled={this.uidisabled(name)}
                readonly={readonly}
              />
            );
          })
        }
      </fieldset>
    );
  }
}

if (process.env.NODE_ENV !== "production") {
  ObjectField.propTypes = {
    schema: PropTypes.object.isRequired,
    uiSchema: PropTypes.object,
    errorSchema: PropTypes.object,
    idSchema: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    formData: PropTypes.object,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    // registry: PropTypes.shape({
    //   widgets: PropTypes.objectOf(PropTypes.func).isRequired,
    //   fields: PropTypes.objectOf(PropTypes.func).isRequired,
    //   definitions: PropTypes.object.isRequired,
    // })
  };
}

export default ObjectField;
