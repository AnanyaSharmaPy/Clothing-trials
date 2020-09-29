import Item1 from '../../images/top1.webp'
import Item2 from '../../images/top2.jpg'
import Item3 from '../../images/top3.jpg'
import Item4 from '../../images/top4.jpg'
import Item5 from '../../images/top5.webp'
import Item6 from '../../images/top6.jpg'
import Item7 from '../../images/bottom1.webp'
import Item8 from '../../images/bottom2.webp'
import Item9 from '../../images/bottom3.jpg'
import Item10 from '../../images/bottom4.png'
import Item11 from '../../images/bottom5.webp'
import { ADD_TO_CART, REMOVE_ITEM, REMOVE_SELECT, SELECT_ITEM, SELECT_SIZE } from '../actions/action-types/cart-actions'

const initState = {
    items: [
        {id:1,title:'top1',img:Item1},
        {id:2,title:'top2',img:Item2},
        {id:3,title:'top3',img:Item3},
        {id:4,title:'top4',img:Item4},
        {id:5,title:'top5',img:Item5},
        {id:6,title:'top6',img:Item6},
        {id:7,title:'bottom1',img:Item7},
        {id:8,title:'bottom2',img:Item8},
        {id:9,title:'bottom3',img:Item9},
        {id:10,title:'bottom4',img:Item10},
        {id:11,title:'bottom5',img:Item11}
    ],
    addedItems:[],
    selectedItems:[],
    size: ""
}
const cartReducer= (state = initState, action)=>{
   
    if(action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item=> item.id === action.id)
        let existed_item= state.addedItems.find(item=> action.id === item.id)
        if(!existed_item) {
            addedItem.quantity = 1;
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem]
            }
        }
    }

    if(action.type === REMOVE_ITEM) {
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)

        let new_sel_items = state.selectedItems.filter(item=> action.id !== item.id)
        
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            selectedItems: new_sel_items
        }
    }

    if(action.type === SELECT_ITEM) {
        let selItem = state.items.find(item=> action.id === item.id)
        let existed_item = state.selectedItems.find(item=> ((action.id <= 6)? (item.id <= 6) : (item.id > 6)))
        if(!existed_item) {
            selItem.quantity = 1;
            return {
                ...state,
                selectedItems: [...state.selectedItems, selItem]
            }
        }
        if(existed_item) {
            if(action.id <= 6) {
                let remItem = state.selectedItems.find(item=> (item.id <= 6))
                let new_items = state.selectedItems.filter(item=> item.id !== remItem)
                selItem.quantity = 1;
                return {
                    ...state,
                    selectedItems: [...state.selectedItems, new_items]
                }
            }
            if (action.id > 6) {
                let remItem = state.selectedItems.find(item=> item.id > 6)
                let new_items = state.selectedItems.filter(item=> item.id !== remItem)
                selItem.quantity = 1;
                return {
                    ...state,
                    selectedItems: [...state.selectedItems, new_items]
                }
            }
        }
    }

    if(action.type === REMOVE_SELECT) {
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_sel_items = state.selectedItems.filter(item=> action.id !== item.id)
        
        console.log(itemToRemove)
        return{
            ...state,
            selectedItems: new_sel_items
        }
    }

    if(action.type === SELECT_SIZE) {
        console.log(action.size)
        return {
            ...state,
            size: action.size
        }
    }

    else{
        return state
    }
}

export default cartReducer
