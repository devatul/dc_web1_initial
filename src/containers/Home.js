import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Tabs from '../components/Tabs';
import GridContent from '../components/GridContent';
import * as actions from '../redux/home/actions';



class Home extends Component {
  state = {
    gridSidebarOpen: false,
    sidebarModule:false,
    activeTabId: false
  }
  componentWillMount(){
    this.props.getSidebarData();
    this.props.getProjectData();
    this.props.getTabsData();
    this.props.getUserData();
  }
  componentWillReceiveProps(props){
    if(!this.state.activeTabId && props.tabs.data[0]){
      this.setState({activeTabId:props.tabs.data[0].id});
    }
  }
  openGridSidebar = (m) => {
   this.setState({gridSidebarOpen:true,sidebarModule:m});
  }
  render() {
    let {gridSidebarOpen, sidebarModule, activeTabId} = this.state;
    return (
      <div  className="app">
        <div className="sidebar-wrapper">
          <Sidebar onOpenSGridModule={this.openGridSidebar} {...this.props}/>
        </div>
        <div className="page-content">
          <div className="home-page">      
            <Header {...this.props}/>
            <Tabs setActiveTab={(tabId)=>this.setState({activeTabId:tabId})} activeTabId={activeTabId} {...this.props}/>
            <GridContent 
              gridSidebarOpen={gridSidebarOpen} 
              sidebarModule={sidebarModule}
              activeTabId={activeTabId} 
              closeGridSidebar={()=>this.setState({gridSidebarOpen:false,sidebarModule:false})} 
              {...this.props}/>
          </div>
        </div>
      </div>
    );
  }
}

// export default Home;
const mapStateToProps = state => {
  return {
    sidebar: state.home.sidebarMenu,
    project:state.home.project,
    user:state.home.user,
    tabs:state.home.tabs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSidebarData: (params)=>{
      return dispatch(actions.getSidebarData(params))
    },
    getTabsData: (params)=>{
      return dispatch(actions.getTabsData(params))
    },
    getProjectData: (params)=>{
      return dispatch(actions.getProjectData(params))
    },
    getUserData: (params)=>{
      return dispatch(actions.getUserData(params))
    },
    updateTabs: (params)=>{
      return dispatch(actions.updateTabs(params))
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
