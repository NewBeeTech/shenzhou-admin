import React, { PropTypes } from 'react';
import { Button } from 'antd';
import styles from '../../assets/stylesheets/Common.css';

const SupportListHeader = (props) => {
  return (
    <div className={ styles.contentHeader }>
      <div className={ styles.contentText }>
        技术支持列表
      </div>
    </div>
  );
};

export default SupportListHeader;
