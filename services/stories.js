import { config } from "../constants";
import axios from 'axios'

export const getStories = async ({filter})=>{
    const res = await axios.get(`${config.API_ENDPOINT}/stories?${Object.keys(filter).map(key => key + '=' + filter[key]).join('&')}`)
    if(res.data.success){
        return res.data.data
    }
    return null
}

export const getTopStories = async ()=>{
    const res = await axios.get(`${config.API_ENDPOINT}/stories/top`)
    if(res){
        return res.data
    }
    return null
}

export const getStoriesByCat = async (category)=>{
    const res = await axios.get(`${config.API_ENDPOINT}/stories/category/${category}`)
    if(res){
        return res.data
    }
    return null
}
