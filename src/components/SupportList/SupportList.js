import React, { PropTypes } from 'react';
import SupportListHeader from './SupportListHeader';
import SupportListSearch from './SupportListSearch';
import SupportListTable from './SupportListTable';
import PageNav from '../../common/PageNav';
import Immutable from 'immutable';
import * as styles from '../../assets/stylesheets/Common.css';
import * as LoginAction from '../../actions/LoginAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';

@amumu.redux.ConnectStore
@amumu.decorators.Loading('pc')
class SupportList extends React.Component {
  componentWillMount() {
    this.props.dispatch(LoginAction.getSupportList(this.props.searchData.toJS()));
  }
  _searchAction = (dispatch: Function) => (params: {}, current = 1) => {
    const localParams = Object.assign(params, { pageNum: current, pageSize: this.props.searchData.get('pageSize') });
    dispatch(LoginAction.getSupportList(localParams));
    this.props.changeAction('LoginReducer/searchData/pageNum', current);
  };
  render() {
    return (
      <div className={ styles.contentList } style={{ top: '60px' }}>
        <div className={ styles.contentListHeader }>
          <SupportListHeader />
        </div>

        <div className={ styles.contentListContent } >
        {/*  <div className={ styles.contentListSearch } >

            <SupportListSearch
              searchAction={this._searchAction(this.props.dispatch)}
              // searchData={this.props.searchData}
              // skillList={this.props.skillSelectList}
            />
          </div>*/}
          <div className={ styles.contentListTable } >
             <SupportListTable
               dataSource={this.props.supportList.get('list')}
               total={this.props.supportList.get('total')}
               dispatch={this.props.dispatch}
             />
          </div>
          <div className={ styles.pageNav }>
            <PageNav
              pageSize={this.props.searchData.get('pageSize')}
              total={this.props.supportList.get('total')}
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

export default SupportList;
