import React, {Component} from 'react';
import profileImg from '../assets/images/user-profile.png';

class Header extends Component {
    render(){
        let {project, user} = this.props;
        return (
        <section className="header">
            <div className="items project-title">
               {project.data.projectName}
            </div>
            <div className="items user-profile">
                Welcome {user.data.userName} 
                <img src={user.data.img || profileImg} />
            </div>
        </section>
        )
    }
}

export default Header;