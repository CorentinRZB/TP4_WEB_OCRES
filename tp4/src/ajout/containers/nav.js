import React from 'react';
import Button from '../components/button';
import '../index.css';

export default class Nav extends React.Component {

    render() {
        const{user,changeUser } = this.props;
        
        return (
            <div class='nav'>
                {user.map((user) => <Button text={user.name}
                onClick={() => changeUser(user.name)} />)}
            </div>)
    }
}
