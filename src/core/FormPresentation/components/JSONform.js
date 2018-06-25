/**
 * Happy Hacking
 * Created by leiyouwho on 5/5/2016.
 */
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import SchemaField from './fields/SchemaField';
import {
  getDefaultFormState,
  // shouldRender,
  toErrorSchema,
  toIdSchema,
  setState,
} from '../utils';

class JSONform extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = this.getStateFromProps(props);
  }
  componentWillUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  getStateFromProps(props) {
    const state = this.state || {};
    const schema = 'schema' in props ? props.schema : this.props.schema;
    const uiSchema = 'uiSchema' in props ? props.uiSchema : this.props.uiSchema;
    // const { definitions } = schema;
    const formData = getDefaultFormState(schema, props.formData);
    // const formData = props.formData;
    return {
      status: 'initial',
      formData,
    };
  }
  onChange = (formData, options = { validate: false }) => {
    const state = { status: 'editing', formData };
    setState(this, state, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    });
    console.log('onChange: ', this.state);
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ status: 'submitted' });
    this.props.onSubmit(this.state);
    this.setState({status: "initial", errors: [], errorSchema: {}});
  };
  render() {
    const formData = this.state.formData;
    return (
      <from
        className="rjsf"
        // onSubmit={(e) => console.log('commit')}
      >
        <SchemaField
          schema={this.props.schema}
          uiSchema={this.props.uiSchema}
          formData={formData}
          onChange={(e) => this.onChange(e)}
          disabled={this.props.disabled}
          readonly={this.props.readonly}
        />
        { this.props.children ? this.props.children :
          <p>
            <button
              type="submit"
              className="btn btn-info"
              onClick={(e) => this.onSubmit(e)}
            >
              提交
            </button>
          </p>
        }
      </from>
    );
  }
}
export default JSONform;
