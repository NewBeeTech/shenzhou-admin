/**
 * Created by wangxiaodan on 16/5/9.
 */
import React, { PropTypes } from 'react';
import { Pagination } from 'antd';

const PageNav = (props) => {
  return (
    <div>
      <Pagination
        onChange={(current) => props.searchAction(props.params, current)}
        total={props.total}
        pageSize={props.pageSize}
        defaultCurrent={1}
        // showQuickJumper
        current={props.current}
      />
    </div>
  );
};

PageNav.propTypes = {
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  searchAction: PropTypes.func.isRequired,
  params: PropTypes.object,
  current: PropTypes.number,
};
export default PageNav;
