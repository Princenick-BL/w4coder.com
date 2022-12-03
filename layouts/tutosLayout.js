import React, { useEffect, useState } from 'react'
import styles from './tutosLayout.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { getTuto } from '../services/tutos'

const handleDispatchMenu = (data = []) =>{
    return [
        {
            id : "A",
            articles :  data?.filter(a => a?.title?.charAt(0)?.toLowerCase() == 'a')
            
        },
        {
            id : "B",
            articles :  data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'b')
            
        },
        {
            id : "C",
            articles :  data?.filter(a => a?.title?.charAt(0)?.toLowerCase() == 'c')
            
        },
        {
            id : "D",
            articles :  data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'd')
            
        },
        {
            id : "E",
            articles :  data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'e')
            
        },
        {
            id : "F",
            articles : data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'f')
            
        },
        {
            id : "G",
            articles : data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'g')
            
        },
        {
            id : "H",
            articles : data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'h')
            
        },
        {
            id : "I",
            articles :  data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'i')
            
        },
        {
            id : "J",
            articles : 
                data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'j')
            
        },
        {
            id : "K",
            articles :  data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'k')
            
        },
        {
            id : "L",
            articles :  data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'l')
            
        },
        {
            id : "M",
            articles :   data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'm')
            
        },
        {
            id : "N",
            articles :  data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'n')
            
        },
        {
            id : "O",
            articles :   data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'o')
            
        },
        {
            id : "P",
            articles :  data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'p')
            
        },
        {
            id : "Q",
            articles :  data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'q')
            
        },
        {
            id : "R",
            articles :  data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'r')
            
        },
        {
            id : "S",
            articles :  data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 's')
            
        },
        {
            id : "T",
            articles :  data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 't')
            
        },
        {
            id : "U",
            articles :  data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'u')
            
        },
        {
            id : "V",
            articles : data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'v')
            
        },
        {
            id : "W",
            articles :  data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'w')
            
        },
        {
            id : "X",
            articles :  data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'x')
            
        },
        {
            id : "Y",
            articles :  data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'y')
            
        },
        {
            id : "Z",
            articles : data?.filter(a => a?.title?.charAt(0)?.toLowerCase() === 'z')
            
        }
    ]
}

export default function TutuosLayout({isBreakpoint,children}) {

    const [tutos,setTutos] = useState([])

    useEffect(()=>{
        (async ()=>{
            const res = await getTuto({filter:{}});
            setTutos(handleDispatchMenu(res || []))
        })();
        
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerContainer}>
                    <Header isBreakpoint={isBreakpoint}/>
                </div>
            </div>
            <div className={styles.main}>
                {(isBreakpoint != 1) &&(
                    <div className={styles.aside}>
                        <h2>Tutos</h2>
                        <br></br>
                        <div className={styles.asideContent}>
                            {tutos&& tutos.map((t,i)=>{
                                return(
                                    <div  key={i}>
                                        <div style={{fontWeight:"bold"}}>{t?.id}</div>
                                        <ul className={styles.subMenu}>
                                            {t?.articles && t?.articles?.map((a,j)=>{
                                                return(
                                                    <li key={j}><Link href={`/tutos/${a?._id}/${a?.slug}`}> {a?.title?.split("-")?.slice()}</Link></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
                <div className={styles.content}>{children}</div>
            </div>
            <Footer/>
        </div>
    )
}
