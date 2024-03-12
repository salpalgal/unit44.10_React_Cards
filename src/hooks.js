import React, {useState} from "react"
import uuid from "uuid";
import axios from "axios";

const useFlip = (initialState = true)=>{
    const [state, setState] = useState(initialState);
    const toggleFlip = ()=>{
        setState(state => !state)
    }
    return [state, toggleFlip]
}

const useAxios = (baseUrl)=>{
   
    
    const [cards, setCards] = useState([])
    // const addCard =async (name="/")=>{
    
    //     let response = await axios.get(`${url}${name}`) 
           
    //     setCards(cards => [...cards, { ...response.data, id: uuid() }]);
        
    // }
    
    const addCard = async ( name = null) => {
        const formatter = data => data
        let url;
        if(!name){
            url = baseUrl
        
        }else{
            url = `${baseUrl}${name}`
        }
        const response = await axios.get(`${url}`);
        setCards(data => [...data, formatter(response.data)]);
      };
    return [cards,addCard]
}

export {useFlip, useAxios} ;