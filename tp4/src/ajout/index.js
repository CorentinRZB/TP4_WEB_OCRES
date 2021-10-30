import React from 'react';
import './index.css';
import User from './containers/user';
import Nav from './containers/nav';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            users: [
                {
                    name:'Jeanne',
                    surname:'Rock',
                    birthdate: '16/03/1999',
                    lastPublication: 'PubliJeanne',
                    like:0
                },
                {
                    name:'Martine',
                    surname:'Jazz',
                    birthdate: '28/07/2000',
                    lastPublication: 'PubliMartine',
                    like:0
                },
                {
                    name:'Claude',
                    surname:'Rap',
                    birthdate: '01/01/2001',
                    lastPublication: 'PubliClaude',
                    like:0
                },

            ],
            selectedUser: 'Jeanne'

        }
    }

    changeUser(selectedUser) {
        this.setState({selectedUser});

    }

    handleLike(username) {
        const{users} = this.state;
        const userIndex = users.findIndex((user) => user.name === username);
        let newUsers = users;
        newUsers[userIndex].like += 1
        this.setState({users:newUsers});
    }

    render() {
        const {users,selectedUser} = this.state;

        return (
            <div class='mainContent'>
                <Nav users={users} changeUser={this.changeUser.bind(this)} />
                <User user={users.find((user) => user.name === selectedUser)} handleLike={this.handleLike.bind(this)} />
            </div>)
    }

}