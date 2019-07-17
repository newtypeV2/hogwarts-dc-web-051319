import React from "react";
import HogCard from "../containers/HogCard"

export default class HogContainer extends React.Component {
    constructor(props){
        super(props)
    }

    getPorks(hogArray){
        return hogArray.map((hog,index) => <HogCard key={index} imgUrl={"../../hog-imgs/"+hog.name.toLowerCase().replace(" ","_")+".jpg"} hogData={hog}/>)
    }

    render(){
        return(
            <div>
                <div>
                    Sorting something here
                </div>
                <div className="ui four column grid">
                    {this.getPorks(this.props.porks)}
                </div>
            </div>
        )
    }

}