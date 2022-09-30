import CachingService from './redis'

const fetch = async (key,fetcher,expires)  =>{
    if(process.env.NEXT_PUBLIC_APP_ENV === "PROD"){
        const existingData = await get(key)
        if(existingData!==null) return existingData
    }
    return set(key,fetcher,expires)
}

const get = async (key)  =>{
    if(process.env.NEXT_PUBLIC_APP_ENV === "PROD"){

        const value = await CachingService.redis.get(key)
    
        if(value===null) return null
    
        return JSON.parse(value)
    }

    return null

}

const set = async (key,fetcher,expires)  =>{
    const value = await fetcher();
    if(process.env.NEXT_PUBLIC_APP_ENV === "PROD"){
        await CachingService.redis.set(key,JSON.stringify(value),"EX",expires)
    }
    return value
}

export default {fetch,set}