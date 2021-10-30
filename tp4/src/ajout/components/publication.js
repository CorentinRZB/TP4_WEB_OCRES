import React from 'react';
import '../index.css';
import Button from '../components/button';

export default class Publication extends React.Component {

    render() {
        const{text,likes,handleLike } = this.props;

        return (
            <div class='publication' >
                <div>
                    {text}
                </div>
                <div>
                    <Button text={"C'est super !"} onClick={handleLike} />
                    <p>Likes : {likes}</p>
                </div>
            </div>)
    }

}