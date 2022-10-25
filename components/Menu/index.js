import React , {useState,useEffect} from 'react'
import Link from 'next/link'
import styles from './index.module.scss'
import Logo from '../Logo'
import { FaSearch } from 'react-icons/fa';

export function HomeMenu({fill=true}) {

    const [show,setShow] = useState(false)

    return (
        <div className={styles.header + " header" +(fill ? " headerFill" : "")}>
            <div className={styles.head}>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <div className={styles.button} onClick={(e)=>setShow(true)}>
                        <div>
                            ☰
                        </div>
                        {/* <div className={styles.text}>
                            MENU
                        </div> */}
                    </div>
                    <div className={styles.content}>
                        <Link href={"/"} >
                            <div className={styles.flexCenter}>
                                <Logo/>
                            </div>
                        </Link>
                        
                        <ul>
                            <li>
                                <Link href={"/article"}>
                                    Articles
                                </Link>
                            </li>
                            <li>
                                <Link href={"/web-story"}>
                                    Stories
                                </Link>   
                            </li>  
                            <li>
                                <Link href={"/web-story"}>
                                    Vidéos
                                </Link>
                            </li>                          
                            <li>
                                <Link href={"/newsletter"}>
                                    Newsletter
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center" ,
                    cursor : "pointer"
                }}>
                    <FaSearch color='#fff' size={25}/>
                </div>
            </div>


        </div>
    )
}


export default function Menu() {
  return (
    <p></p>
  )
}
