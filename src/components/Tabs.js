import React, {Component} from 'react';

class Tabs extends Component {
    node = []
    refe = (node) => {
        this.node.push(node);
        this.props.nodesetup(this.node);
    }
    getTabs=()=>{
        let {tabs, activeTabId} = this.props;
        let listTabs = [];
        tabs.data.map((tab, i)=>{
            listTabs.push(<div key={i} className={`tab-opt ${tab.id === activeTabId ? ' active': ''}`} onClick={()=>this.props.setActiveTab(tab.id)}>
            <span className="tab-label">{tab.tabName} </span>&times;
         </div>)
        })
        return listTabs;
    }

    render(){
        
        return (
        <section className="tabs">
            <div className={'edit-button'} ref={this.refe} onClick={()=>this.props.toggleSidebar()}>
               <span className="text"> Edit</span>
               <span className="bar"> 
                <span></span>
                <span></span>
                <span></span>
               </span>
            </div>
            <div className="angle angle-left">
                <i className="fas fa-angle-left"></i>
            </div>
            {this.getTabs()}
            <div className="angle angle-right">
                <i className="fas fa-angle-right"></i>
            </div>
            <div className={'add-Tab'}>+</div>
        </section>
        )
    }
}

export default Tabs;