import React from 'react';
import iPath from '../../hog-imgs/cherub.png'

export default class CardFront extends React.Component {
    render(){
        return (
            <div className="column">
                    <div className="ui fluid card">
                        <div className="image">
                            <img src={`${this.props.imgUrl}`}/>
                            {/* <img src={window.location.origin + 'hog-imgs/cherub.png'} /> */}
                        </div>
                        <div className="content">
                            <span className="header">{this.props.name}</span>
                        </div>
                    </div>
                </div>
        )
    }
}