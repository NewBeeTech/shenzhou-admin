
import React, { PropTypes } from 'react';
import styles from '../../assets/stylesheets/Common.css';
import Immutable from 'immutable';
import { showCancel } from '../../core/FormValidate/CancelOk';
import { modifyButton, confirmButton, SubmitButton, cancelButton, revertButton }
 from '../../core/CommonFun/ButtonCommon';

const DynamicInfoHeader = (props) => {
  const handleSubmit = (actionName) => {
    console.warn(props.params);
    console.warn(props.form.getFieldValue());
    props.form.validateFields((errors) => {
      if (!!errors) {
        return;
      }
      actionName(props.params);
    });
  };
  const _renderTitle = () => {
    if (props.id) {
      if (props.editing) {
        return (
          <div>{`编辑公告 ID: ${props.id}`}</div>
        );
      }
    }
    return false;
  };
  const _rednerBtn = () => {
    if (props.id) {
      if (props.editing) {
        return modifyButton(handleSubmit)(props.updateAction);
      }
    } else {
      return modifyButton(handleSubmit)(props.updateAction);
    }
  }
  const _returnBtn = () => {
    if (props.id && !props.editing) {
      return revertButton(props.goBackAction)();
    }
    return revertButton(showCancel)(props.goBackAction, props.id, props.params);
  };
  return (
    <div>
      <div className={ styles.contentHeader }>
        <div className={ styles.contentText }>
          {_renderTitle()}
        </div>
        <div className={ styles.contentButton }>
          {_rednerBtn()}
          {_returnBtn()}
        </div>
      </div>
    </div>
  );
};

DynamicInfoHeader.propTypes = {
  id: PropTypes.string,
  form: PropTypes.any,
  params: PropTypes.object,
  editing: PropTypes.string,
  goBackAction: PropTypes.func.isRequired,
  goUpdateAction: PropTypes.func.isRequired,
  updateAction: PropTypes.func.isRequired,
};

export default DynamicInfoHeader;
