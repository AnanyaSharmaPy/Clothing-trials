import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../style.css";
import { addToCart } from '../components/actions/cartActions'

class Dresses extends Component {
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render() {
        let itemList = this.props.items.map(item=>{
            return(
                <li className="collection-item avatar" key={item.id}>
                    <div className="item-img"> 
                        <img src={item.img} alt={item.img} className=""/>
                    </div>

                    <div className="item-desc">
                        <span className="title">{item.title}</span>
                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleClick(item.id)}}>ADD TO CART</button>
                    </div>
                </li>
            )
        })

        return(
            <div className="container">
                <div className="cart">
                    <h5>Our Items</h5>
                    <ul className="collection">
                        {itemList}
                    </ul>
                </div>
                <Link to="assemble">Try Out</Link><br />
                <Link to="/">Previous Page</Link>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.items,
        additions: state.addedItems
    }
}
const mapDispatchToProps= (dispatch)=>{
    return {
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dresses)