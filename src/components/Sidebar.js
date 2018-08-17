import React, {Component} from 'react';


class Sidebar extends Component {
    node = []
    refe = (node) => {
        this.node.push(node);
        this.props.nodesetup(this.node);
    }
    getMenuItems = () => {
        let menuItems = [];
        this.props.sidebar.data.map((m, i)=>{            
            menuItems.push(
                <div key={m.id} ref={this.refe} className="menu-item" onLoad={this.abc} onClick={()=>this.props.toggleSidebar(m)}>
                    <div className="circle-bg">
                        <span className={`circle ${i > 0 ? 'small' : ''}`} style={{background:m.color}}>
                            
                        </span>
                    </div>
                </div>
            )
        })
        return menuItems;
    }
    render(){
        return (
        <section className="sidebar">
            <div className="menu">
                <div className="logo"/>
                {this.getMenuItems()}
            </div>
        </section>
        )
    }
}

export default Sidebar;