import React, { PropTypes } from 'react';
import { Button } from 'antd';
import styles from '../../assets/stylesheets/Common.css';

const DynamicListHeader = (props) => {
  return (
    <div className={ styles.contentHeader }>
      <div className={ styles.contentText }>
        公告列表
      </div>
      <div className={ styles.contentButton }>
        <Button
          type="primary"
          // className={ styles.blueButton }
          onClick={ () => props.goCreateAction() }
        >
          新建公告
        </Button>
      </div>
    </div>
  );
};

export default DynamicListHeader;
