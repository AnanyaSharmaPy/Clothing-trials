import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, selectItem, removeSelect } from '../components/actions/cartActions'
class Assemble extends Component {

    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    handleSelect = (id)=>{
        this.props.selectItem(id);
    }
    handleRemoveTry= (id)=>{
        this.props.removeSelect(id);
    }
    render(){
        let selItems = this.props.selections.length ?
        (
            this.props.selections.map(item=>{
                return(
                    <li className="collection-item avatar" key={item.id}>
                        <div className="item-img"> 
                            <img src={item.img} alt={item.img} className=""/>
                        </div>
                    </li>
                )
            })
        ):
        (
            <p>Nothing :(</p>
        )

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
                            <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleSelect(item.id)}}>Select To Try</button>
                            <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemoveTry(item.id)}}>Remove from Try</button>
                            <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove from Cart</button>
                        </div>
                    </li>
                )
            })
        ):

        (
            <p>Nothing :(</p>
        )
        return(
            <div className="container">
                <div className="cart">
                    <h5>Trial Zone</h5>
                    <ul className="collection">
                        {selItems}
                    </ul>
                </div>
                <div className="container">
                    <h5>Your Selections</h5>
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
        items: state.addedItems,
        selections: state.selectedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        selectItem: (id)=>{dispatch(selectItem(id))},
        removeSelect: (id)=>{dispatch(removeSelect(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Assemble)