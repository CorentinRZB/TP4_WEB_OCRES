import React from 'react';
import Button from '../components/button';
import Publication from '../components/publication';
import Img from '../components/img';
import '../index.css';

export default class User extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            backgroundColor:'white'
        }
    }
    changeStyle() {
        this.setState((prevState) => ({backgroundColor: prevState.backgroundColor === 'white' ? 'black' : 'white'}))

    }
    render() {
        const {user, handleLike } =  this.props;
        const {backgroundColor} = this.state;

        return (
            <div class='user'>
                <div class='profile' style={{ background: backgroundColor, color: backgroundColor === 'white' ? 'black' : 'white' }}>
                    <Img src={user.picture}/>
                    <div class='profileInformations'>
                        <div class='profileInformation'>
                            {`Prenom: ${user.name}`}
                        </div>
                        <div class='profileInformation'>
                            {`Nom: ${user.surname}`}
                        </div>
                        <div class='profileInformation'>
                            {`Date de Naissance: ${user.birthdate}`}
                        </div>
                    </div>
                    <Button text={'Change style'} onClick={this.changeStyle.bind(this)} style={{ alignSelf: 'flex-end' }} />
                </div>
                <Publication text={user.lastPublication} likes={user.like} handleLike={() => handleLike(user.name)} />
            </div>)
    }


}