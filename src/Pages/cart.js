import { useEffect, useState } from "react";
import { Table } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";
import { changename } from "./store";
import { addCount, addItem } from "../Pages/store";

function Cart() {
    let state = useSelector((state) => state)
    let dispatch = useDispatch()
    
    return (
         <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th></th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {state.Cart.map((item, i) =>
                        <tr key={i}>
                            <td>1</td>
                            <td>{state.Cart[i].name}</td>
                            <td>{state.Cart[i].count}</td>
                            <td><button onClick={()=>{
                                dispatch(addCount(state.Cart[i].id))
                            }}>+</button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}


export default Cart;
