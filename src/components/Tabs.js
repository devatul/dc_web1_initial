import React, {Component} from 'react';

class Tabs extends Component {
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
            <div className={'edit-button'}>
               <span className="text"> Edit</span>
               <span className="bar"> 
                <span></span>
                <span></span>
                <span></span>
               </span>
            </div>
            {this.getTabs()}
            <div className={'add-Tab'}>+</div>
        </section>
        )
    }
}

export default Tabs;