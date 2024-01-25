import { configureStore, createSlice } from '@reduxjs/toolkit'



let user = createSlice({
  name: ' user ',
  initialState: 'kim',
  reducers: {
    changename(state){
      return 'john' + state
    }
  }
})

export let {changename} = user.actions

let Cart = createSlice({
  name: 'Cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 0 },
    { id: 2, name: 'Grey Yordan', count: 0 },

  ],
 reducers : {
  addCount (state, actions){
        let 번호 = state.findIndex((a)=> {return a.id == actions.payload })
        state[번호].count++
  },
  addItem(state,action){
    state.push(action.payload)
  }
 }
})


export let {addCount, addItem} = Cart.actions
export default configureStore({
  reducer: {
    Cart: Cart.reducer,
  }
}) 