import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Tabs from '../components/Tabs';
import GridContent from '../components/GridContent';



class Home extends Component {
  render() {
    return (
      <div  className="app">
        <div className="sidebar-wrapper">
          <Sidebar {...this.props}/>
        </div>
        <div className="page-content">
          <div className="home-page">      
            <Header {...this.props}/>
            <Tabs {...this.props}/>
            <GridContent {...this.props}/>
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
  return {}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
