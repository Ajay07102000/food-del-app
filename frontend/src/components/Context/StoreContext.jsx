import { createContext, useEffect, useState } from "react";
import axios from 'axios';
export const StoreContext =createContext(null)

const StoreContextProvider =(props)=>{

    const url="https://food-del-backend-loit.onrender.com";
    const [cartItems,setCartItems] =useState({});
    const [food_list,setFoodList] =useState([])
    const addToCart =(itemId)=>{
        if(!cartItems[itemId])
        {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const fetchFoodList =async()=>{
        const response =await axios.get(url+"/api/food/list");
        setFoodList(response.data.data)
    }
    useEffect(()=>{

        async function loadData(){
            await fetchFoodList()
        }
        loadData();
    })

    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValue ={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
