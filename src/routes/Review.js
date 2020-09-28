import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import "../style.css"

class Review extends Component {

    render() {
        let selectedItems = this.props.selections.length ?
        (
            this.props.selections.map(item=> {
                // if(item.id <= 6) {
                return(
                    <li className="collection-item avatar" key={item.id}>
                        <div className="item-img"> 
                            <img src={item.img} alt={item.img} className=""/>
                        </div>
                    </li>
                )
                // }
                // else{
                    
                // }
            })
        ):
        (
            <p>Nothing :(</p>
        )


        return(
            <div className="container finalPage">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {selectedItems}
                    </ul>
                    <p>Size = {this.props.size} </p>
                    <Link to="selectSize">Previous Page</Link><br />
                    <Link to="/">Go Home</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        selections: state.selectedItems,
        size: state.size
    }
}

export default connect(mapStateToProps)(Review)