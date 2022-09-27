import React,{useEffect, useState} from 'react'
import Link from 'next/link'
import styles from './index.module.scss'
import { count } from '../../services/articles'
import axios from 'axios'

export default function Pagination({ev}) {

    const [current,setCurrent] = useState(1)
    const [lenght,setLength] = useState([])

    useEffect(()=>{
        (async()=>{
            const query = new URLSearchParams(window.location.search);
            const token = query.get('page')
            const pos = parseInt(token)||1
            setCurrent(pos)        
            const countRes = await count()
            const availableSize = countRes+2
            setLength(Array.from(Array(Math.ceil(availableSize/10)||1).keys())) 
            //console.log(Math.ceil(availableSize/10))
        })();
    },[ev])
    
    return (
        <div className={styles.container}>
            {current-1 > 1 && (
                <Link  href={`/article/?page=${current-1}`}>
                    <a className={styles.button}>{"PREV"}</a>
                </Link>
            )}
            {(current-1 > 0 && current-1 <= 1 )&& (
                <Link  href={`/`}>
                    <a className={styles.button}>{"PREV"}</a>
                </Link>
            )}
            <div className={styles.pagination}>
                {lenght.map(val=>{
                    
                    if((val+1 === 1) || (val+1 === current)|| (val+1 === (current - 1)) || (val+1 === (current + 1)) || (val+1 === lenght.length)){
                        return(
                            <Link key={val}  href={val+1==1 ?"/":`/article/?page=${val+1}`}>
                                <div className={styles.nextLink + " "+ (val+1==current?styles.current:"")}>{val+1}</div>
                            </Link>
                        )
                        
                    }else{
                        return <div style={{color:"#fff"}} key={val}>.</div>

                    }
                })}
            </div>
            {(lenght.length > 1 && current+1 < lenght.length+1) && (
                <Link  href={`/article/?page=${current+1}`}>
                    <a className={styles.button}>{"NEXT"}</a>
                </Link>
            )}
            
        </div>
    )
}
