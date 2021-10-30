import React from 'react';
import '../index.css';
import User from './containers/user';
import Nav from './containers/nav';
import Martine from './img/Martine.png';

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


}