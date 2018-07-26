import React, {Component} from 'react';


class Sidebar extends Component {
    getMenuItems = () => {
        let menuItems = [];
        this.props.sidebar.data.map((m)=>{            
            menuItems.push(
                <div key={m.id} className="menu-item">
                    <div className="circle-bg">
                        <span className="circle" style={{background:m.color}}>
                            {m.label}
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
                {this.getMenuItems()}
            </div>
        </section>
        )
    }
}

export default Sidebar;