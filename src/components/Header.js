import React, {Component} from 'react';
import editing_circle_icon from '../assets/images/editing_circle_icon.png';

class Header extends Component {
    render(){
        let {project, user} = this.props;
        return (
        <section className="header">
            <div className="items project-title">
                <img src={editing_circle_icon} />
               {project.data.projectName}
            </div>
            <div className="items user-profile">
                <i className="fas fa-user-circle"></i>
            </div>
        </section>
        )
    }
}

export default Header;