import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, selectItem } from '../components/actions/cartActions'
class Assemble extends Component {

    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    handleSelect = (id)=>{
        this.props.selectItem(id);
    }
    render(){
        let addedItems = this.props.items.length ?
        (  
            this.props.items.map(item=>{
                return(
                    
                    <li className="collection-item avatar" key={item.id}>
                        <div className="item-img"> 
                            <img src={item.img} alt={item.img} className=""/>
                        </div>
                    
                        <div className="item-desc">
                            <span className="title">{item.title}</span>
                            <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                            <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleSelect(item.id)}}>Select</button>
                        </div>
                    </li>
                )
            })
        ):

        (
            <p>Nothing.</p>
        )
        return(
            <div className="container">
                <div className="cart">
                    <h5>Cart Items</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                <Link to="selectSize">Select Size</Link><br />
                <Link to="dresses">Previous Page</Link>
            </div>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        selectItem: (id)=>{dispatch(selectItem(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Assemble)