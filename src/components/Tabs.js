import React, {Component} from 'react';

class Tabs extends Component {
    state = {
        activetab: 1,
    }
    getTabs=()=>{
        let {tabs} = this.props;
        let listTabs = [];
        tabs.data.map((tab)=>{
            listTabs.push(<div className={`tab-opt ${tab.id === this.state.activetab ? ' active': ''}`} onClick={()=>this.setState({activetab:tab.id})}>
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