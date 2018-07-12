import React, { PropTypes } from 'react';
import DynamicListHeader from './DynamicListHeader';
import DynamicListSearch from './DynamicListSearch';
import DynamicListTable from './DynamicListTable';
import PageNav from '../../common/PageNav';
import Immutable from 'immutable';
import * as styles from '../../assets/stylesheets/Common.css';
import * as LoginAction from '../../actions/LoginAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';

@amumu.redux.ConnectStore
@amumu.decorators.Loading('pc')
class DynamicList extends React.Component {
  componentWillMount() {
    this.props.dispatch(LoginAction.getDynamicList(this.props.searchData.toJS()));
  }
  _searchAction = (dispatch: Function) => (params: {}, current = 1) => {
    const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    dispatch(LoginAction.getDynamicList(localParams));
    this.props.changeAction('LoginReducer/dynamicSearchData/pageNum', current);
  };

  _goCreateAction = (dispatch: Function) => () => {
    dispatch(push(RoutingURL.DynamicInfo()));
  }
  _goUpdateAction = (dispatch: Function) => (params) => {
    dispatch(LoginAction.getDynamicInfo(params));
    dispatch(push(RoutingURL.DynamicInfo(params.get('id'), true)));
  }
  _deleteAction = (dispatch: Function) => (params: number, current = 1) => {
    // const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    dispatch(LoginAction.delDynamic(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') }));
    this.props.changeAction('LoginReducer/dynamicSearchData/pageNum', current);
  };
  render() {
    return (
      <div className={ styles.contentList } style={{ top: '60px' }}>
        <div className={ styles.contentListHeader }>
          <DynamicListHeader goCreateAction={this._goCreateAction(this.props.dispatch)} />
        </div>

        <div className={ styles.contentListContent } >
        {/*  <div className={ styles.contentListSearch } >

            <DynamicListSearch
              searchAction={this._searchAction(this.props.dispatch)}
              // searchData={this.props.searchData}
              // skillList={this.props.skillSelectList}
            />
          </div>*/}
          <div className={ styles.contentListTable } >
             <DynamicListTable
               dataSource={this.props.dynamicList.get('list')}
               total={this.props.dynamicList.get('total')}
               dispatch={this.props.dispatch}
               deleteBannerAction={this._deleteAction(this.props.dispatch)}
               goUpdateAction={this._goUpdateAction(this.props.dispatch)}
             />
          </div>
          <div className={ styles.pageNav }>
            <PageNav
              pageSize={this.props.searchData.get('pageSize')}
              total={this.props.dynamicList.get('total')}
              params={this.props.searchData.toJS()}
              current={this.props.searchData.get('pageNum')}
              searchAction={this._searchAction(this.props.dispatch)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DynamicList;
