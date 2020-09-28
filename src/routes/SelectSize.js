import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { selectSize } from '../components/actions/cartActions'

class SelectSize extends Component {

    handleSize = (e)=>{
        this.props.selectSize(e.target.value);
    }
    
    render() {
        let selectedItem = this.props.selections.length ?
        (
            this.props.selections.map(item=> {
                return(
                    <li className="collection-item avatar" key={item.id}>
                        <div className="item-img"> 
                            <img src={item.img} alt={item.img} className=""/>
                        </div>
                    
                        <div className="item-desc">
                            <span className="title">{item.title}</span>
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
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {selectedItem}
                    </ul>
                </div>
                <div>
                    <p>Select your size</p>
                    {/* <input type="checkbox"></input> */}
                    <input type="radio" value="XS" name="sizeSel" onChange={this.handleSize} /> XS
                    <input type="radio" value="S" name="sizeSel" onChange={this.handleSize} /> S
                    <input type="radio" value="M" name="sizeSel" onChange={this.handleSize} /> M
                    <input type="radio" value="L" name="sizeSel" onChange={this.handleSize} /> L
                    <input type="radio" value="XL" name="sizeSel" onChange={this.handleSize} /> XL
                </div>
                <Link to="review">View final product</Link><br />
                <Link to="assemble">Previous Page</Link>
            </div>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        selections: state.selectedItems,
        size: state.size
    }
}
const mapDispatchToProps= (dispatch)=>{
    return {
        selectSize: (size)=>{dispatch(selectSize(size))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SelectSize)