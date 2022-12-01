import { config } from "../constants";
import axios from 'axios'

export const getTuto = async ({filter})=>{
    const res = await axios.get(`${config.API_ENDPOINT}/tuto?${Object.keys(filter).map(key => key + '=' + filter[key]).join('&')}`)
    if(res.data.success){
        return res.data.data
    }
    return null
}

export const getTutoById = async (id)=>{
    const res = await axios.get(`${config.API_ENDPOINT}/tuto/${id}`)
    if(res){
        return res?.data
    }
    return null
}

export const searchTuto = async (keywords)=>{
    const res = await axios.get(`${config.API_ENDPOINT}/tuto/search?keywords=${keywords}`)
    if(res.data.success){
        return res.data.data
    }
    return null
}

export const count = async ()=>{
    const res = await axios.get(`${config.API_ENDPOINT}/tuto/count`)
    if(res.data.success){
        return res.data.data
    }
    return null
}

export const getTopTutos = async ()=>{
    const res = await axios.get(`${config.API_ENDPOINT}/tuto/top`)
    if(res.data.success){
        return res.data.data
    }
    return null
}

export const getTutoByCat = async (category)=>{
    const res = await axios.get(`${config.API_ENDPOINT}/tuto/category/${category}`)
    if(res){
        return res.data
    }
    return null
}

export const getTutoByCatCaroussel = async (category)=>{
    const res = await axios.get(`${config.API_ENDPOINT}/get-tuto-by-cat-caroussel`)
    if(res){
        return res.data
    }
    return null
}

export const getCategories = async (category)=>{
    const res = await axios.get(`${config.API_ENDPOINT}/categories`)
    if(res){
        return res.data
    }
    return null
}

