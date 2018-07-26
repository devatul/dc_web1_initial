import React, {Component} from 'react';


class Sidebar extends Component {
    getMenuItems = () => {
        let menuItems = [];
        this.props.sidebar.data.map((m, i)=>{            
            menuItems.push(
                <div key={m.id} className="menu-item" onClick={()=>this.props.onOpenSGridModule(m)}>
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
                {this.getMenuItems()}
            </div>
        </section>
        )
    }
}

export default Sidebar;