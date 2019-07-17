import React from "react";
import CardFront from "../presentational/CardFront";

export default class HogCard extends React.Component {
    render(){
        let {name,specialty,greased} = this.props.hogData
        return(
                <CardFront imgUrl={this.props.imgUrl} name={name} />
                // <CardBack specialty={specialty} greased={greased}/>
        )
    }
}