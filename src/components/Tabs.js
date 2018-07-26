import React, {Component} from 'react';

class Tabs extends Component {
    getTabs=()=>{
        let {tabs, activeTabId} = this.props;
        let listTabs = [];
        tabs.data.map((tab, i)=>{
            listTabs.push(<div key={i} className={`tab-opt ${tab.id === activeTabId ? ' active': ''}`} onClick={()=>this.props.setActiveTab(tab.id)}>
            <span className="tab-label">Page 1 </span>&#9746;
         </div>)
        })
        return listTabs;
    }

    render(){
        
        return (
        <section className="tabs">
            {this.getTabs()}
        </section>
        )
    }
}

export default Tabs;